import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Define metadata if you need it, or remove this block entirely if not.
export const metadata = {
  title: "Inspire Next Global Inc.",
  description: "Your site description",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#18191b]">
        {/* Header at the top */}
        <Header />
        {/* Main Content */}
        <main>
          {children}
        </main>
        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}