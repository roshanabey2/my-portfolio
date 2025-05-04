'use client';
import { useMode } from "@/context/ModeContext";
import { useRouter } from 'next/navigation';
import Carousel3D from "@/components/Carousel3D"; // or whatever visual you end up using
import "@/app/globals.scss";

export default function SplashPage() {
  const { setMode } = useMode();
  const router = useRouter();

  const handleSelect = (selectedMode) => {
    const modeKey = selectedMode.toLowerCase().split(" ")[0]; // e.g., "minimal"
    setMode(modeKey);
    router.push('/');

  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Carousel3D onSelect={handleSelect} />
      <div className="scanlines">
      </div>
    </div>
  );
}

