import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Behavioral Biometrics: Minecraft Anti-Cheat Detection",
  description: "Detecting KillAura, Flight, and X-Ray cheats in Minecraft Java Edition using keystroke & mouse behavioral biometrics with machine learning. Thompson Rivers University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
