import ImageGlow from 'react-image-glow';
import { useMode } from "@/context/ModeContext";
import Image from 'next/image';

const Hero = () => {
  const { mode } = useMode();
  return (
    <section className="min-h-screen flex flex-row justify-center items-center text-left p-6 m-6">
      <div className=" relative flex flex-col justify-start p-3">

        <div className={`${mode !== 'showcase' ? 'hidden' : ''}`}>
          <div className="glitch" data-text="Roshan Abeysekera" >Roshan Abeysekera </div>
          <div className="glow">Roshan Abeysekera</div>
        </div>
        {mode !== 'showcase' &&(
        <h1 className={`component_name text-9xl ${mode}`}>Roshan Abeysekera</h1>
        )}

        <br />


        <div className={`subtitle ${mode} `}>
          Full-Stack Developer and Software Engineer | Portfolio 2025
        </div>

        <div className={`info_text ${mode} mt-6`}>
          I build thoughtful software with an eye for performance and clarity. Currently tinkering with AI-assisted tools and low-level systems.
        </div>
      </div>

      <div className="hidden md:block opacity-90 items-center transform-none p-3">
        <div className={`${mode !== 'showcase' ? 'hidden' : ''}`}>
          <ImageGlow
            radius={20}
            saturation={1.5}
            opacity={0.9}
            className="relative w-full h-full items-center overflow-hidden bg-[#24283b] rounded-3xl ">
            <img
              src="/showcase_coding_panda.png"
              alt="My Logo"
              width={300}
              height={600}
              style={{ objectFit: 'cover', width: '100%', height: 'full' }}
              className="w-full h-auto opacity-90"
            />
          </ImageGlow>
          <div className="absolute inset-0 pointer-events-none"
            style={{
              maskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
            }}
          >
          </div>
        </div>


         <div className={`${mode !== 'minimal' ? 'hidden' : ''}`}>
          <Image
            opacity={0.9}
            className="relative w-full h-full items-center overflow-hidden bg-[#24283b] rounded-3xl "
            src="/minimal_coding_panda.png"
              alt="My Logo"
              width={300}
              height={900}
              style={{ objectFit: 'cover', width: '100%', height: 'full' }}
          />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              maskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
            }}
          >
          </div>
        </div>




      </div>
    </section >
  );
};

export default Hero;

