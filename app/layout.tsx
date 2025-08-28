import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "My Devefolio website",
  description: "A portfolio showcasing my projects and skills",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=113989&format=png&color=000000",       
    shortcut: "https://img.icons8.com/?size=100&id=113989&format=png&color=000000",   
    apple: "https://img.icons8.com/?size=100&id=113989&format=png&color=000000",     
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-white transition-colors dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <NavBar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
