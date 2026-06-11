'use client';
import { useMode } from "@/context/ModeContext";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import "@/app/globals.scss";

export default function SplashPage() {
  const { clearMode, setMode } = useMode();
  const router = useRouter();
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isChoosingMode, setIsChoosingMode] = useState(false);

  useEffect(() => {
    clearMode();
  }, [clearMode]);

  const handlePointerMove = (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    setEyeOffset({
      x: Math.max(-1, Math.min(1, x)) * 6,
      y: Math.max(-1, Math.min(1, y)) * 5,
    });
  };

  const handleSelect = (modeKey) => {
    setMode(modeKey);
    router.push('/');

  };

  return (
    <main
      className="splash-page"
      onPointerMove={handlePointerMove}
      data-mouth-open={isChoosingMode}
      style={{
        "--eye-x": `${eyeOffset.x}px`,
        "--eye-y": `${eyeOffset.y}px`,
      }}
    >
      <button
        className="splash-mode-button splash-mode-showcase"
        type="button"
        onPointerEnter={() => setIsChoosingMode(true)}
        onPointerLeave={() => setIsChoosingMode(false)}
        onFocus={() => setIsChoosingMode(true)}
        onBlur={() => setIsChoosingMode(false)}
        onClick={() => handleSelect("showcase")}
      >
        <span>showcase</span>
        <small>glitch / matrix / terminal</small>
      </button>

      <div className="pixel-panda" aria-label="pixel panda face">
        <div className="pixel-ear pixel-ear-left" />
        <div className="pixel-ear pixel-ear-right" />
        <div className="pixel-face">
          <div className="pixel-eye-patch pixel-eye-patch-left">
            <div className="pixel-eye">
              <span />
            </div>
          </div>
          <div className="pixel-eye-patch pixel-eye-patch-right">
            <div className="pixel-eye">
              <span />
            </div>
          </div>
          <div className="pixel-nose" />
          <div className="pixel-mouth" />
        </div>
      </div>

      <button
        className="splash-mode-button splash-mode-minimal"
        type="button"
        onPointerEnter={() => setIsChoosingMode(true)}
        onPointerLeave={() => setIsChoosingMode(false)}
        onFocus={() => setIsChoosingMode(true)}
        onBlur={() => setIsChoosingMode(false)}
        onClick={() => handleSelect("minimal")}
      >
        <span>minimal</span>
        <small>serif / calm / bookish</small>
      </button>

      <div className="scanlines" />
    </main>
  );
}
