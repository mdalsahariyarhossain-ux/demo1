import React from "react";

export default function Contact() {
  const bgImage =
    "https://sumesshmenonassociates.com/wp-content/uploads/2023/07/home-interior-designer-banner-new.webp";

  return (
    <section
      id="contact"
      className="relative w-full py-32"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/100 via-black/90 to-transparent"></div>

      {/* RIGHT CORNER TEXT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex justify-end">
        <div className="max-w-md text-right text-white">
          <h2 className="text-3xl md:text-4xl font-serif">
            Let’s Discuss About Your Project.
          </h2>

          <p className="text-gray-300 mt-3">
            Share your project details and let's create something incredible.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
}
