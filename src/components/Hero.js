import React from "react";

export default function Hero() {
  // put hero image in public/images/hero.jpg and reference as /images/hero.jpg
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: "url('https://claritechinfo.in/wp-content/uploads/2025/09/4-Bhk-Kerala-House-Design-4-768x576.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 font-serif">
          Crafting Luxury Interiors
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          We design elegant spaces for modern living — from concept to
          completion.
        </p>
        <div className="flex justify-center gap-4">
          {/* ✅ SAME PAGE SCROLL */}
          <a href="#projects">
            <button className="px-6 py-3 bg-red-600 text-gray-900 font-semibold rounded-md shadow">
              Explore Now
            </button>
          </a>
          <a href="#services">
          <button className="px-6 py-3 border border-gray-400 rounded-md text-sm">
            See Our Work
          </button>
            </a>
        </div>
      </div>
    </section>
  );
}
