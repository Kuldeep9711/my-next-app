import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Contact Maneger",
  description: "A simple contact a management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
