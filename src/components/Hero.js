import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-row justify-center items-center text-left p-6">
      <div className="flex flex-col items-start">
        <h1 className="text-5xl font-bold mb-4 text-[#ff9e64]">Hi, I'm Roshan</h1>
        <p className="text-xl text-[#ff007c]">
          Full-Stack Developer | Ruby on Rails • React • C
        </p>
        <p className="mt-4 max-w-xl text-[#4fd6be]">
          I build thoughtful software with an eye for performance and clarity. Currently tinkering with AI-assisted tools and low-level systems.
        </p>
      </div>

      <div className="hidden md:block opacity-100 transform-none">
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            src="/panda.svg"
            width={200}
            height={200}
            alt="Coding Panda"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

