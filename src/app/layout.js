import "./globals.scss";
import Navbar from '../components/Navbar'; // or wherever it's located
import { MatrixBackground } from "@/components/MatrixBackground";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MatrixBackground
          textColour={"#9d7cd8"}
          backgroundColour={"var(--color-background)"}
          alphaBackgroundColour="rgba(36,40,59,0.05)"
          font={"var(--font-matrix)"}
          textColumnWidth={20}
          fps={20}
        />
        <div className="scanlines"></div>

        <Navbar className="relative z-20" />

        <main>{children}</main>
      </body>
    </html>
  );
}
