"use client";
import Image from "next/image";
import { useMode } from "@/context/ModeContext";

export default function AboutPage() {
  const { mode } = useMode();
  return (
    <section>
      <article className="min-h-screen flex flex-row text-left p-6 my-12">
        <div className="flex-1 flex flex-col justify-start p-3">
          <h1 className={`component_name text-6xl ${mode}`}>About Me</h1>
          <p className={`mt-4 subtitle ${mode} `}>
            Hello there, I'm Roshan Abysekera. I build clean, practical web apps
            with a bias for solid architecture and thoughtful design.
          </p>
          <p className={`info_text ${mode}`}>
            I’m a developer with a back-end leaning brain and a front-end eye
            for polish. I like building products that feel calm to use and easy
            to maintain.
          </p>
        </div>
        <div className="hidden md:flex flex-1 p-3">
          <Image
            opacity={1}
            className="relative w-full h-full items-center overflow-hidden bg-[#24283b] rounded-3xl "
            src="/avatarsAndIcons/avatars/profile_pic.jpg"
            alt="My Photo"
            width={400}
            height={400}
            style={{ objectFit: "cover", width: "100%", height: "full" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
          ></div>
        </div>
      </article>
      <article className="min-h-screen flex flex-col justify-left text-left p-6 m-4">
        <h1 className={`component_name text-6xl ${mode}`}>How I work</h1>
        <p className={`info_text ${mode} `}>
          I try to keep things simple: small surfaces, clear naming, predictable
          flows. If something feels “clever,” I usually make it less clever.
        </p>
        <ul className={`info_text ${mode}`}>
          <li>Start with constraints → ship a tight MVP</li>
          <li>Make changes safely (tests, small PRs, measurable outcomes)</li>
          <li>Document decisions so Future Me doesn’t suffer</li>
        </ul>
      </article>
    </section>
  );
}
