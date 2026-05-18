import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maldives Ocean Aquarium",
  description:
    "An immersive Maldives reef aquarium with cinematic lighting, tropical fish, and floating particles.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
