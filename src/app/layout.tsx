import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dean Aviv | Unity Developer & Instructor",
  description:
    "Portfolio website for Dean Aviv, a Unity developer, gameplay programmer, and instructor.",
  icons: {
    icon: site.logo.src,
    shortcut: site.logo.src,
    apple: site.logo.pngFallback,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
