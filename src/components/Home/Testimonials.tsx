"use client";

import Marquee from "react-fast-marquee";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "“Amazing work Shahrukh and congratulations on creating this masterpiece! - on Why Not Meri Jaan - Young Stunners”",
    name: "Adnan Malik",
    image: "/images/testi1.jpeg",
  },
  {
    id: 2,
    quote:
      "“Blown away by the entire (FEPO's) team on this (CS Anthem Music Video). Shahrukh killed it. FEPO FOREVER!”",
    name: "Sikandar Ali",
    image: "/images/testi2.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white text-black py-10 md:py-14 overflow-hidden select-none">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left Title Area */}
          <div>
            <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
              <span className="text-[#E11D48] font-medium">//</span>
              <span className="text-gray-700">TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black font-interd">
              Trusted Brands Worldwide
            </h2>
          </div>

          {/* Right Description Paragraph */}
          <p className="text-xs sm:text-sm text-[#202020] font-normal leading-relaxed max-w-sm font-interd">
            Crafting visuals and compelling stories for the music we make — from
            hit tracks to cinematic music videos, trusted by artists and brands
            that move the world.
          </p>
        </div>
      </div>

      {/* Non-stop Marquee Carousel */}
      <Marquee
        gradient={false}
        speed={70}
        pauseOnHover={false}
        pauseOnClick={false}
        direction="left"
        className="flex items-center py-4"
      >
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="w-[560px] sm:w-[740px] md:w-[700px] bg-[#F3F3F5] rounded-3xl flex items-center justify-between gap-6 flex-shrink-0 mx-4 md:mx-5"
          >
            {/* Left Content Column with dedicated padding */}
            <div className="flex-1 flex flex-col justify-between h-full p-6 sm:p-8 md:pl-14">
              {/* Quote */}
              <p className="text-base sm:text-lg md:text-base font-medium text-black leading-snug my-6 font-interd">
                {item.quote}
              </p>

              {/* Author Information */}
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl lg:text-xl font-medium text-black font-interd">
                  {item.name}
                </h4>
              </div>
            </div>

            {/* Right Photo Column with p-2 padding applied */}
            <div className="w-[210px] sm:w-[250px] md:w-[280px] h-[270px] sm:h-[320px] md:h-[360px] p-2 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center rounded-2xl pointer-events-none"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
