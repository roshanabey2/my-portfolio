"use client";
import Image from "next/image";
import { useMode } from "@/context/ModeContext";

export default function AboutPage() {
  const { mode } = useMode();

  const principles = [
    {
      title: "Small, clear surfaces",
      text: "I prefer interfaces and APIs that make the next action obvious. Clear naming, predictable flows, and restrained scope usually beat cleverness.",
    },
    {
      title: "Practical architecture",
      text: "I like systems that are easy to change: thin boundaries, explicit data flow, and enough structure to keep future work cheap.",
    },
    {
      title: "Polish with purpose",
      text: "A product should feel calm to use. I care about visual detail when it helps people scan, trust, and complete their work faster.",
    },
  ];

  return (
    <section className={`page-shell about-page ${mode}`}>
      <article className={`about-hero ${mode}`}>
        <div className="about-copy">
          <p className={`about-kicker ${mode}`}>Full-stack developer</p>
          <h1 className={`component_name about-title ${mode}`}>About Me</h1>
          <p className={`about-lede ${mode}`}>
            I&apos;m Roshan Abeysekera. I build practical web applications with a
            back-end leaning brain and a front-end eye for clarity.
          </p>
          <p className={`about-body ${mode}`}>
            I like software that feels calm to use and straightforward to
            maintain. My strongest work sits where product thinking, system
            design, and implementation detail meet: shaping small MVPs, making
            data flows understandable, and polishing the parts users touch every
            day.
          </p>
        </div>

        <div className={`about-photo-frame ${mode}`}>
          <Image
            className="about-photo"
            src="/avatarsAndIcons/avatars/profile_pic.jpg"
            alt="Roshan Abeysekera"
            width={520}
            height={520}
            priority
          />
        </div>
      </article>

      <article className="about-section">
        <div className="about-section-header">
          <h2 className={`component_name ${mode}`}>How I Work</h2>
          <p className={`about-body ${mode}`}>
            I start with constraints, keep the first version tight, and document
            decisions so the next change has context.
          </p>
        </div>

        <div className="about-principles">
          {principles.map((principle) => (
            <section key={principle.title} className={`about-card ${mode}`}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}
