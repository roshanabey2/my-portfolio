import { useMode } from "@/context/ModeContext";

const Contact = () => {
  const { mode } = useMode();
  return (
    <section className={`p-6 text-center ${mode} `} >
      <h2 className={`component_name text - 3xl font - bold mb - 4 `} > Let's Connect</h2>
      <p className="text-gray-400">Email me at <a href="mailto:roshabey2@gmail.com" className="hover:text-blue-400">roshanabey2@gmail.com</a></p>
      <p className="text-gray-400 mt-2">
        or find me on <a href="https://github.com/roshanabey2" className="hover:text-blue-400"> GitHub</a> • <a href="https://linkedin.com/in/roshan-abeysekera-a8b3961b2" className="hover:text-blue-400">  LinkedIn</a>
      </p>
    </section>
  );
}

export default Contact;

