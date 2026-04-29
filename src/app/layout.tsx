import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dean Aviv | Unity Developer & Instructor",
  description:
    "Portfolio website for Dean Aviv, a Unity developer, gameplay programmer, and instructor.",
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
