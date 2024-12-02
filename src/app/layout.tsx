import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My track",
  applicationName: "MyTrack",
  description: "Make building skills a habit",
  keywords: ['my track', 'task track', 'skills track', 'habit track'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
