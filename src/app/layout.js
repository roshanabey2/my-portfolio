'use client';
import "./globals.scss";
import Navbar from '../components/Navbar';
import { MatrixBackground } from "@/components/MatrixBackground";
import { ModeProvider, useMode } from "@/context/ModeContext";

function AppLayout({ children }) {
  const { mode } = useMode();

  return (
    <body className={`${mode ? mode : ""}`}>
      {mode === 'showcase' && (
        <MatrixBackground
          textColour={"#9d7cd8"}
          backgroundColour={"var(--color-background)"}
          alphaBackgroundColour="rgba(36,40,59,0.05)"
          font={"var(--font-matrix)"}
          textColumnWidth={20}
          fps={20}
        />
      )}
      {(mode === null || mode === 'showcase') && (
        <div className="scanlines"></div>
      )}


      <Navbar className="relative z-20" />
      <main>{children}</main>
    </body>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ModeProvider>
        <AppLayout>{children}</AppLayout>
      </ModeProvider>
    </html>
  );
}

