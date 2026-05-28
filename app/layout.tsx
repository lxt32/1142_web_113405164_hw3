import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1142 Web HW3",
  description: "Interactive 3D scene built with Next.js and React Three Fiber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
