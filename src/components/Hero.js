import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-row justify-center items-center text-left p-6 m-6">
      <div className=" relative flex flex-col justify-start p-3">
        <div className="glitch" data-text="Roshan Abeysekera" >Roshan Abeysekera </div>
        <div className="glow">Roshan Abeysekera</div>
        <div className="subtitle">
          Full-Stack Developer and Software Engineer | Portfolio 2025
        </div>
        <div className="info_text">
          I build thoughtful software with an eye for performance and clarity. Currently tinkering with AI-assisted tools and low-level systems.
        </div>
      </div>

      <div className="hidden md:block opacity-100 items-center transform-none p-3">
        <div className="relative w-full h-full items-center overflow-hidden">
          <Image
            src="/coding_panda.png"
            alt="My Logo"
            width={300}
            height={600}
            style={{ borderRadius: '15%', objectFit: 'cover', width: '100%', height: 'full' }}


          />

        </div>
      </div>
    </section >
  );
};

export default Hero;

