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

            </div>
          );
        })}
      </div>
      <div className="controls">
        <button onClick={rotateLeft}>⟨</button>
        <button onClick={() => onSelect(modes[index])}>Select</button>
        <button onClick={rotateRight}>⟩</button>
      </div>
    </div>
  );
}

