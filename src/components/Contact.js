import { useMode } from "@/context/ModeContext";
import "./projects.css";

const Contact = () => {
  const { mode } = useMode();
  return (
    <section className={`p-6 text-center ${mode} `}>
      <h2 className={`component_name text-3xl font-bold mb-4 ${mode} `}>
        Let&apos;s Connect{" "}
      </h2>
      <p>
        Email me at{" "}
        <a href="mailto:roshabey2@gmail.com" className={`contactlinks ${mode}`}>
          roshanabey2@gmail.com
        </a>
      </p>
      <p className="mt-2">
        or find me on{" "}
        <a
          href="https://github.com/roshanabey2"
          className={`contactlinks ${mode}`}
        >
           GitHub
        </a>{" "}
        •{" "}
        <a
          href="https://linkedin.com/in/roshan-abeysekera-a8b3961b2"
          className={`contactlinks ${mode}`}
        >
          {" "}
           LinkedIn
        </a>
      </p>
    </section>
  );
};

export default Contact;
