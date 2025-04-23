'use client';
import { useMode } from "@/context/ModeContext";
import Carousel3D from "./Carousel3D"; // or whatever visual you end up using

export default function SplashPage() {
  const { setMode } = useMode();

  const handleSelect = (selectedMode) => {
    const modeKey = selectedMode.toLowerCase().split(" ")[0]; // e.g., "minimal"
    setMode(modeKey);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Carousel3D onSelect={handleSelect} />
    </div>
  );
}

