import { FALLBACK_WRITINGS } from "@/constants/writings";

const FEED_URL = process.env.SUBSTACK_RSS_URL;

function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function stripHtml(value = "") {
  return decodeXml(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTag(item, tagName) {
  const match = item.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  return match ? decodeXml(match[1]) : "";
}

function parseRssItems(xml) {
  return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].slice(0, 8).map(([item]) => {
    const description = getTag(item, "description");
    const content = getTag(item, "content:encoded");
    const rawDate = getTag(item, "pubDate");
    const parsedDate = rawDate ? new Date(rawDate) : null;

    return {
      title: stripHtml(getTag(item, "title")),
      date: parsedDate && !Number.isNaN(parsedDate.valueOf())
        ? parsedDate.toISOString().slice(0, 10)
        : "",
      excerpt: stripHtml(description || content).slice(0, 220),
      url: stripHtml(getTag(item, "link")),
      tags: [],
    };
  }).filter((post) => post.title && post.url);
}

export async function GET() {
  if (!FEED_URL) {
    return Response.json({ source: "fallback", posts: FALLBACK_WRITINGS });
  }

  try {
    const response = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });

    if (!response.ok) throw new Error(`Feed returned ${response.status}`);

    const posts = parseRssItems(await response.text());
    return Response.json({
      source: posts.length > 0 ? "substack" : "fallback",
      posts: posts.length > 0 ? posts : FALLBACK_WRITINGS,
    });
  } catch {
    return Response.json({ source: "fallback", posts: FALLBACK_WRITINGS });
  }
}
