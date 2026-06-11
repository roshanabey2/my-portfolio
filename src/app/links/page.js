"use client";

import { useMode } from "@/context/ModeContext";

const linkGroups = [
  {
    title: "Engineering",
    links: [
      { label: "Next.js Docs", href: "https://nextjs.org/docs" },
      { label: "MDN Web Docs", href: "https://developer.mozilla.org/" },
      { label: "Refactoring Guru", href: "https://refactoring.guru/" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Excalidraw", href: "https://excalidraw.com/" },
      { label: "Raycast", href: "https://www.raycast.com/" },
      { label: "Carbon", href: "https://carbon.now.sh/" },
    ],
  },
  {
    title: "Reading",
    links: [
      { label: "Lobsters", href: "https://lobste.rs/" },
      { label: "Hacker News", href: "https://news.ycombinator.com/" },
      { label: "The Marginalian", href: "https://www.themarginalian.org/" },
    ],
  },
];

export default function LinksPage() {
  const { mode } = useMode();

  return (
    <section className={`page-shell ${mode}`}>
      <header className="page-header">
        <h1 className={`component_name text-6xl ${mode}`}>Links</h1>
        <p className={`writing-intro ${mode}`}>
          A temporary shelf of references, tools, and reading paths.
        </p>
      </header>

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
    </section>
  );
}
