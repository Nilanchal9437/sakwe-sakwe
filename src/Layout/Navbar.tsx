"use client";

import React from "react";
import Container from "@/components/Container";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Methods", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Accelerator", href: "#" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "fixed bg-white shadow"
          : "absolute bg-transparent"
      }`}
    >
      <Container>
        <div ref={navRef}>
          <nav className="mx-auto flex items-center justify-between px-4 py-2 relative">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-gray-900">logo</span>
              <span className="italic text-gray-500">@ipsum</span>
            </div>
            {/* Desktop Nav */}
            <ul className="hidden lg:flex gap-8 text-gray-800 font-medium text-lg">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-black transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="hidden lg:block bg-white text-black font-medium rounded-xl px-8 py-3 shadow transition hover:bg-gray-100 border border-gray-200"
              style={{ minWidth: 120 }}
            >
              Log in
            </button>
            {/* Hamburger for mobile */}
            <button
              className="lg:hidden ml-auto flex items-center justify-center p-2 rounded focus:outline-none"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </nav>
          {/* Mobile menu dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl flex flex-col items-center py-4 lg:hidden animate-fade-in z-40">
              <ul className="flex flex-col gap-4 w-full items-center">
                {navLinks.map((link) => (
                  <li key={link.label} className="w-full text-center">
                    <Link
                      href={link.href}
                      className="block py-2 text-gray-800 font-medium text-lg hover:text-black transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 bg-white text-black font-medium rounded-xl px-8 py-3 shadow transition hover:bg-gray-100 border border-gray-200"
                style={{ minWidth: 120 }}
              >
                Log in
              </button>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
