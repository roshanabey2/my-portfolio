import { useState } from 'react';
import './Carousel3D.css';
import Image from 'next/image';

const modes = ['minimal', 'showcase', 'dark'];

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
      <h1>Welcome to My Portfolio</h1>
      <div className="carousel-3d">
        {modes.map((mode, i) => {
          const offset = i - index;
          const transform = `rotateY(${offset * 40}deg) translateZ(${offset === 0 ? 200 : 150}px)`;
          return (
            <div key={mode} className={` flex carousel-item ${offset === 0 ? 'active' : ''}`} style={{ transform }}>
              <button onClick={() => onSelect(modes[index])}>
                <Image
                  src={
                    mode === "minimal"
                      ? "/minimal__panda_icon.png"
                      : mode === "showcase"
                        ? "/showcase_panda_icon.jpg"
                        : "/dark_panda_icon.png"}
                  alt={`${mode} mode `}
                  width={85}
                  height={85}
                />
              </button>

            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={rotateLeft}><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z" fill="currentColor" /> </svg></button>
        <button onClick={() => onSelect(modes[index])}> {modes[index]} </button>
        <button onClick={rotateRight}>⟩</button>
      </div>
    </div>
  );
}

