"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Fixed Header Bar */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 max-w-xl z-40 flex items-center justify-between bg-black/20 mx-5 my-4 px-4 md:px-10 py-1 backdrop-blur-2xl rounded-full">
        {/* Mobile: Brand + Hamburger */}
        <h1 className="text-white font-bold text-xl md:hidden">Merdi</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="text-white p-1 md:hidden"
          aria-label="Open menu"
        >
          <RxHamburgerMenu className="w-7 h-7" />
        </button>

        {/* Desktop: Horizontal Nav */}
        <nav className="hidden md:flex items-center w-full justify-center gap-8 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Sidebar Menu Card */}
      <div
        className={`fixed top-4 left-4 right-4 bottom-4 z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-black/20 h-full backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5">
            <h2 className="text-white font-bold text-xl">Merdi</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-1"
              aria-label="Close menu"
            >
              <IoClose className="w-7 h-7" />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col px-6 pb-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-white text-base font-medium hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
