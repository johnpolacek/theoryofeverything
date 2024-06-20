import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";

const bitter = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "a Theory of Everything",
  description: "a Theory of Everything - The Meaning of Life, Consciousness, Our Universe, Time, Higher Dimensions, Infinity, Black Holes, Aliens, Are We In a Simulation, Does God Exist, and... Why?",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>*️</text></svg>"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bitter.className}>{children}</body>
    </html>
  );
}
