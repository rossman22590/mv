import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shimmer — Music Video | Pixio AI",
  description: "Shimmer music video made with Pixio AI. Studio outtakes: stills, video, audio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen font-body bg-[var(--studio-black)] text-[var(--studio-white)] studio-grain">
        {children}
      </body>
    </html>
  );
}
