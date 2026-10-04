import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Hub",
  description: "Student Hub — รายวิชา เพลง และเกม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <header className="siteHeader">
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}