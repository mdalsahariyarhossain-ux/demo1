import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/60 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-semibold tracking-widest">DESIGNER</div>

        <nav>
          <ul className="hidden md:flex gap-8 text-sm">
            <li>
              <a href="#home" className="hover:text-amber-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-amber-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-amber-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
