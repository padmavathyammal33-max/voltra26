"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Team", path: "/winners/team" },
    { name: "Individual", path: "/winners/individual" },
    { name: "Points", path: "/points" },
    { name: "Events", path: "/events" },
    { name: "Squads", path: "/squads" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/hero.jpeg"
            alt="Voltra Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-lg md:text-xl font-bold text-yellow-400">
            VOLTRA'26
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`transition duration-300 ${
                  isActive
                    ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-400 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-yellow-500/20 px-6 py-4 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block text-lg ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}