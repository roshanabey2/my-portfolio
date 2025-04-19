import "./globals.css";
import MatrixBackground from "./components/MatrixBackground";
import Navbar from '../components/Navbar'; // or wherever it's located


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="my-monospace"
      >
        <MatrixBackground />
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
