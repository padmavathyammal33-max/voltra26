import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "VOLTRA'26",
  description: "HCLTech Sports Day — Where Teams Compete. Legends Rise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
       