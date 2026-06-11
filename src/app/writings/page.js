"use client";

import { useEffect, useState } from "react";
import { FALLBACK_WRITINGS } from "@/constants/writings";
import { useMode } from "@/context/ModeContext";

export default function WritingsPage() {
  const { mode } = useMode();
  const [posts, setPosts] = useState(FALLBACK_WRITINGS);
  const [source, setSource] = useState("fallback");

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        const response = await fetch("/api/writings");
        if (!response.ok) return;
        const data = await response.json();
        if (isMounted && Array.isArray(data.posts)) {
          setPosts(data.posts);
          setSource(data.source || "fallback");
        }
      } catch {
        // Local fallback posts are already rendered.
      }
    }

    loadPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className={`page-shell ${mode}`}>
      <header className="page-header">
        <h1 className={`component_name text-6xl ${mode}`}>Writings</h1>
        <p className={`writing-intro ${mode}`}>
          Essays, notes, and working thoughts on software, systems, and the tools
          I am learning from.
        </p>
      </header>

      <div className="writing-grid">
        {posts.map((post) => (
          <article key={`${post.title}-${post.date}`} className={`writing-card ${mode}`}>
            <div className="writing-meta">
              <time dateTime={post.date}>{post.date || "Draft"}</time>
              {source === "substack" && <span>Substack</span>}
            </div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div className="writing-footer">
              <div className="writing-tags">
                {(post.tags || []).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className={`links ${mode}`} href={post.url}>
                Read
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
