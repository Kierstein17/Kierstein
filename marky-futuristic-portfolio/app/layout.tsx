import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marky Mallari | Programmer Portfolio",
  description: "The digital portfolio of Marky Mallari — IT student, aspiring developer, and creative problem solver.",
  applicationName: "Marky Mallari Portfolio",
  themeColor: "#070b16"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
