import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mail-Gen",
  description: "Generate tailored emails from job descriptions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
