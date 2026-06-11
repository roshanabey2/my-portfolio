"use client";

import { useMode } from "@/context/ModeContext";

const linkGroups = [
  {
    title: "Engineering",
    links: [
      {
        label: "Next.js Docs",
        href: "https://nextjs.org/docs",
        description: "Framework reference for App Router, routing, rendering, and deployment.",
      },
      {
        label: "MDN Web Docs",
        href: "https://developer.mozilla.org/",
        description: "The default reference for browser APIs, HTML, CSS, and JavaScript.",
      },
      {
        label: "Refactoring Guru",
        href: "https://refactoring.guru/",
        description: "Clear examples for design patterns, code smells, and refactoring moves.",
      },
    ],
  },
  {
    title: "Tools",
    links: [
      {
        label: "Excalidraw",
        href: "https://excalidraw.com/",
        description: "Fast sketches for flows, architecture, and loose product thinking.",
      },
      {
        label: "Raycast",
        href: "https://www.raycast.com/",
        description: "Launcher and workflow utility for repetitive desktop actions.",
      },
      {
        label: "Carbon",
        href: "https://carbon.now.sh/",
        description: "Code screenshots for notes, posts, and visual documentation.",
      },
    ],
  },
  {
    title: "Reading",
    links: [
      {
        label: "Lobsters",
        href: "https://lobste.rs/",
        description: "Technical discussion with a stronger signal-to-noise ratio.",
      },
      {
        label: "Hacker News",
        href: "https://news.ycombinator.com/",
        description: "Industry links, product launches, essays, and arguments worth skimming.",
      },
      {
        label: "The Marginalian",
        href: "https://www.themarginalian.org/",
        description: "Essays on literature, attention, creativity, and intellectual life.",
      },
    ],
  },
];

export default function LinksPage() {
  const { mode } = useMode();
  const flatLinks = linkGroups.flatMap((group) =>
    group.links.map((link) => ({ ...link, group: group.title }))
  );

  return (
    <section className={`page-shell ${mode}`}>
      <header className="page-header">
        <h1 className={`component_name text-6xl ${mode}`}>Links</h1>
        <p className={`writing-intro ${mode}`}>
          A temporary shelf of references, tools, and reading paths.
        </p>
      </header>

      {mode === "minimal" ? (
        <MinimalLinks links={flatLinks} />
      ) : (
      <div className="link-grid">
        {linkGroups.map((group) => (
          <section key={group.title} className={`link-panel ${mode}`}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <a className={`links ${mode}`} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      )}
    </section>
  );
}

function MinimalLinks({ links }) {
  return (
    <div className="minimal-link-index">
      {links.map((link, index) => (
        <a
          key={link.href}
          className="minimal-link-row"
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          <span className="minimal-link-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="minimal-link-main">
            <span className="minimal-link-title">{link.label}</span>
            <span className="minimal-link-description">{link.description}</span>
          </span>
          <span className="minimal-link-group">{link.group}</span>
        </a>
      ))}
    </div>
  );
}
