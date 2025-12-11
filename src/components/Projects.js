import React from "react";

const projects = [
  {
    title: "Modern Luxury Villa",
    desc: "Full exterior & interior design",
    img: "https://images.pexels.com/photos/7031404/pexels-photo-7031404.jpeg"
  },
  {
    title: "Contemporary Living Room",
    desc: "Warm tones with premium lighting",
    img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
  },
  {
    title: "Minimalist Workspace",
    desc: "Clean layout for productivity",
    img: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
  },
  {
    title: "Elegant Bedroom Suite",
    desc: "Soft textures & mood lighting",
    img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className=" bg-gray-800 py-16"
      style ={{ backgroundImage: "url('https://media.istockphoto.com/id/1422930780/vector/empty-square-pedestal-base-for-product-display-advertising-sale-and-show-on-black-background.jpg?s=612x612&w=0&k=20&c=hTWpljrmp5PvqazrLrTA50qCz0-1MZRA4xbXKBhNSK0=')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' }}
      >
      <div className="max-w-6xl mx-auto px-12 py-20" >
      <h3 className="text-2xl font-semibold mb-1">Our Projects</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-8 ">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow-lg bg-gray-900"
          >
            {/* IMAGE WITH OVERLAY TEXT */}
            <div
              className="relative h-52 bg-cover bg-center"
              style={{ backgroundImage: `url('${p.img}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* TEXT ON IMAGE */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <p className="text-gray-200 text-sm">{p.desc}</p>
              </div>
            </div>

            {/* BOTTOM CONTENT (OPTIONAL) */}
            <div className="p-4">
              <p className="text-gray-400 text-sm">
                Premium interior & architectural execution.
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
