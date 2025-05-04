import { useState } from 'react';
import './Carousel3D.css';
import Image from 'next/image';

const modes = ['showcase', 'minimal', 'dark'];

export default function Carousel3D({ onSelect }) {
  const [index, setIndex] = useState(1); // Start with Showcase

  const rotateLeft = () => {
    setIndex((index - 1 + modes.length) % modes.length);
  };

  const rotateRight = () => {
    setIndex((index + 1) % modes.length);
  };

  return (
    <div className="carousel-3d-container">
      <h1 className="text-3xl">Welcome to My Portfolio</h1>
      <div className="carousel-3d">
        {modes.map((mode, i) => {
          const offset = i - index;
          const transform = `rotateY(${offset * 40}deg) translateZ(${offset === 0 ? 200 : 150}px)`;
          return (
            <div key={mode} className={` flex carousel-item ${offset === 0 ? 'active' : ''}`} style={{ transform }}>
              <Image
                src={
                  mode === "minimal"
                    ? "/avatarsAndIcons/icons/minimal_panda_icon.png"
                    : mode === "showcase"
                      ? "/avatarsAndIcons/icons/showcase_panda_icon.png"
                      : "/avatarsAndIcons/icons/dark_panda_icon.png"}
                alt={`${mode} mode `}
                width={85}
                height={85}
              />

            </div>
          );
        })}
      </div>
      <div className="controls allign-center">
        <button onClick={rotateLeft}>
          <svg fill="none" width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
            <path d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z" fill="currentColor" /> 
          </svg>
        </button>
        <button onClick={() => onSelect(modes[index])}> {modes[index]} </button>
        <button onClick={rotateRight}>
          <svg fill="none" width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
          <path d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}

