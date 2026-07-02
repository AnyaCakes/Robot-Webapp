import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robot Code Builder",
  description: "Pick a sensor and a behavior to generate an Arduino sketch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
