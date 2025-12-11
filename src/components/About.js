import React from "react";

const members = [
  {
    name: "Ava Lee",
    role: "Lead Designer",
    img: "https://static.vecteezy.com/system/resources/thumbnails/034/783/102/small/portrait-of-a-woman-isolated-on-a-white-background-ai-generated-photo.jpg",
  },
  {
    name: "Mark Chen",
    role: "Project Manager",
    img: "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/6697274132daf24911799669_6635609f1211ec0f632803d6_fatzFxYM_ad86_raw.jpeg",
  },
  {
    name: "Sofia Park",
    role: "Stylist",
    img: "https://lumenor.ai/cdn-cgi/imagedelivery/F5KOmplEz0rStV2qDKhYag/cb02d3c4-5f9a-4455-64e9-916fac596f00/source",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://trehanluxuryfloors.com/wp-content/uploads/2025/10/W34-5-optimized.webp')",
        }}
      ></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ABOUT TEXT */}
        <div className="text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-wide">
            ABOUT US
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
            Our philosophy is rooted in the belief that a space should be an
            expression of one's innermost aspirations, a sanctuary where dreams
            find their truest form. We understand the profound influence of
            design on the human psyche, and we harmoniously blend art,
            psychology, and meticulous craftsmanship to create spaces that
            captivate the heart and soul.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            As the prestigious Double Ace’s, we bring a legacy of unmatched
            craftsmanship and heritage to every project we undertake. Our
            esteemed reputation in the industry is a testament to our
            uncompromising dedication to quality and our relentless pursuit of
            perfection. With an illustrious portfolio spanning the most
            luxurious residences, esteemed establishments, and iconic
            landmarks, we have established ourselves as pioneers of opulence
            and sophistication.
          </p>

          <button className="text-amber-400 text-sm tracking-wider uppercase hover:underline mb-24">
            Read More →
          </button>
        </div>

        {/* TEAM SECTION — SAME BACKGROUND */}
        <h3 className="text-4xl font-serif mb-6 text-white">Our Team</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center shadow-lg"
            >
              <img
                src={m.img}
                alt={m.name}
                className="mx-auto w-28 h-28 object-cover rounded-full border-2 border-white/40 mb-4"
              />
              <h4 className="text-white font-medium">{m.name}</h4>
              <p className="text-sm text-gray-300">{m.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
