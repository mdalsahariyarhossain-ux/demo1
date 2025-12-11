import React from "react";

const services = [
  {
    title: "Living Room Design",
    desc: "Elegant and modern living spaces",
    img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
  },
  {
    title: "Kitchen Design",
    desc: "Functional and stylish kitchens",
    img: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
  },
  {
    title: "Bedroom Design",
    desc: "Comfortable luxury bedrooms",
    img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
  },
  {
    title: "Office Design",
    desc: "Productive workspace interiors",
    img: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
  },
  {
    title: "Lighting Design",
    desc: "Perfect lighting solutions",
    img: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg"
  },
  {
    title: "Decoration",
    desc: "Aesthetic interior decorations",
    img: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"
  }
];

export default function Services() {
  return (
    <section id="services" 
    className="relative w-full bg-black py-16 bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Our Services</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gray-900/60 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {/* IMAGE WITH TEXT OVERLAY */}
              <div
                className="relative h-80 bg-cover bg-center"
                style={{ backgroundImage: `url('${s.img}')` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text On Image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h4 className="text-lg font-semibold text-white">
                    {s.title}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-60">
        <h2 className="text-6xl font-serif text-center">TESTIMONIALS</h2>
        <p className="text-gray-300 font-s font-serif text-balance mt-6 max-w-2xl mx-auto text-center">
          Don't just take our word for it-hear what our satisfied clients have to say about their experience with AffluenceArt.
          From stunning architectural designs to impeccable interior transformations, our clients rave about the unparalleled level 
          of service and craftsmanship they received. Read their testimonials to discover why AffluenceArt is the preferred choice 
          for bespoke living
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-20">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="border border-white border-b-4 rounded-3xl p-8 bg-transparent  text-gray-500 text-center"
            >
              <p className="italic text-lg">
                “The service was amazing. Everything was handled professionally.”
              </p>

              <div className="mt-4 flex items-center justify-center gap-3">
                <img
                  src="https://i.pravatar.cc/50"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <h4 className="text-sm  text-gray-400 font-semibold">James Walter</h4>
                  <p className="text-gray-400 text-xs">@james_walter</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
