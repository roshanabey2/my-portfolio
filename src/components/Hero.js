import { useMode } from "@/context/ModeContext";
import Image from "next/image";

const Hero = () => {
  const { mode } = useMode();
  if (mode === "showcase") return <ShowcaseHero />;
  return <MinimalHero mode={mode} />;
};

function ShowcaseHero() {
  return (
    <section className="showcase-hero">
      <div className="showcase-hero-copy">
        <div>
          <div className="glitch" data-text="Roshan Abeysekera">
            Roshan Abeysekera
          </div>
          <div className="glow">Roshan Abeysekera</div>
        </div>

        <p className="showcase-hero-subtitle">
          Full-stack developer and software engineer
        </p>

        <p className="showcase-hero-body">
          I build thoughtful software with an eye for performance and clarity.
          Currently tinkering with AI-assisted tools and low-level systems.
        </p>

        <div className="showcase-status-grid">
          <div>
            <span>MODE</span>
            <strong>SHOWCASE</strong>
          </div>
          <div>
            <span>FOCUS</span>
            <strong>AI TOOLS</strong>
          </div>
          <div>
            <span>STACK</span>
            <strong>RAILS / REACT</strong>
          </div>
        </div>
      </div>

      <aside className="showcase-avatar-panel" aria-label="profile visual">
        <div className="showcase-panel-bar">
          <span>avatar.render</span>
          <span>online</span>
        </div>
        <div className="showcase-avatar-screen">
          <Image
            src="/avatarsAndIcons/avatars/showcase_coding_panda.png"
            alt="Coding panda avatar"
            width={520}
            height={680}
            priority
          />
        </div>
        <div className="showcase-panel-footer">
          <span>signal: stable</span>
          <span>fps: 20</span>
        </div>
      </aside>
    </section>
  );
}

function MinimalHero({ mode }) {
  return (
    <section className="minimal-hero">
      <div className="minimal-hero-copy">
        <h1 className={`component_name minimal-hero-title ${mode}`}>
          Roshan Abeysekera
        </h1>

        <p className={`minimal-hero-subtitle ${mode}`}>
          Full-stack developer and software engineer
        </p>

        <p className={`minimal-hero-body ${mode}`}>
          I build thoughtful software with an eye for performance and clarity.
          Currently tinkering with AI-assisted tools and low-level systems.
        </p>
      </div>

      <div className="minimal-hero-image">
        <Image
          src="/avatarsAndIcons/avatars/minimal_coding_panda.png"
          alt="Coding panda avatar"
          width={420}
          height={520}
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
