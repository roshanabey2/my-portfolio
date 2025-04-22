import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-row justify-center items-center text-left p-6 m-6">
      <div className=" relative flex flex-col justify-start p-3">
        <div className="glitch" data-text="Roshan Abeysekera" >Roshan Abeysekera </div>
        <p className="subtitle">
          Full-Stack Developer and Software Engineer | Portfolio 2025
        </p>
        <p className="mt-4 text-[#4fd6be]">
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

