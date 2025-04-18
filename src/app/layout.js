
import "./globals.css";
import Navbar from '../components/Navbar' // or wherever it's located

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="my-monospace"
      >
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
