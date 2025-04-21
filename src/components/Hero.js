import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-row justify-center items-center text-left p-6 m-6">
      <div className="flex flex-col justify-start p-3">
        <h1 className="component_name glitch text-2xl font-bold mb-4" data-text="Roshan Abeysekera">Roshan Abeysekera</h1>
        <p className="text-xl text-[#ff007c]">
          Full-Stack Developer and Software Engineer | Portfolio 2025
        </p>
        <p className="mt-4 max-w-xl text-[#4fd6be]">
          I build thoughtful software with an eye for performance and clarity. Currently tinkering with AI-assisted tools and low-level systems.
        </p>
      </div>

      <div className="hidden md:block opacity-100 items-center transform-none p-3">
        <div className="relative w-full h-full items-center overflow-hidden">
          <Image
            src="/coding_panda.png"
            alt="My Logo"
            width={200}
            height={300}


          />

        </div>
      </div>
    </section>
  );
};

export default Hero;

