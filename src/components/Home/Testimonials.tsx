"use client"

import Marquee from 'react-fast-marquee'

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  location: string
  logo: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "“Uxora truly exceeded our expectations. Their designs were not only visually stunning but also incredibly intuitive, making the user experience seamless. We highly recommend them for any UI/UX project!”",
    name: "Val Koval",
    role: "Co-founder & CEO, Ubiquic",
    location: "Maryland, United States",
    logo: "/images/logo7.svg",
    image: "/images/hero1.webp",
  },
  {
    id: 2,
    quote:
      "“As a founder, finding the right team for Trainmate was a challenge until we discovered Uxora. They quickly onboarded, worked within our budget, and delivered high-quality designs at an impressive pace.”",
    name: "George El Nachar",
    role: "Founder, Trainmate",
    location: "Dubai, United Arab Emirates",
    logo: "/images/logo7.svg",
    image: "/images/hero2.webp",
  },
  {
    id: 3,
    quote:
      "“Working with Uxora transformed our product completely. Their attention to detail, rapid turnarounds, and creative execution helped us launch our platform ahead of schedule.”",
    name: "Elena Rostova",
    role: "Head of Product, Finly",
    location: "London, United Kingdom",
    logo: "/images/logo7.svg",
    image: "/images/hero3.webp",
  },
  {
    id: 4,
    quote:
      "“The team at Uxora brought our vision to life with unprecedented speed. Their design system made scaling our digital storefront effortless and hugely boosted our user retention.”",
    name: "Marcus Vance",
    role: "CTO, NextCommerce",
    location: "Austin, Texas",
    logo: "/images/logo7.svg",
    image: "/images/hero4.webp",
  },
  {
    id: 5,
    quote:
      "“Uxora's intuitive approach to UX design solved complex workflow challenges for our enterprise platform. Highly recommended for any brand aiming for world-class quality.”",
    name: "Sarah Jenkins",
    role: "Design Lead, Horizon",
    location: "Toronto, Canada",
    logo: "/images/logo7.svg",
    image: "/images/hero5.webp",
  },
]

const Testimonials = () => {
  return (
    <section className="w-full bg-white text-black py-10 md:py-14 overflow-hidden select-none">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left Title Area */}
          <div>
            <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
              <span className="text-[#2563EB] font-medium">//</span>
              <span className="text-gray-700">TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black font-interd">
              Trusted Brands Worldwide
            </h2>
          </div>

          {/* Right Description Paragraph */}
          <p className="text-xs sm:text-sm text-[#202020] font-normal leading-relaxed max-w-sm font-interd">
            We build the next in commerce on Shopify. From strategy to design,
            development to retention, we've got you covered. <br /> 9+ years of
            experience, 200+ stores launched,
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
            className="w-[660px] sm:w-[740px] md:w-[700px] bg-[#F3F3F5] rounded-3xl flex items-center justify-between gap-6 flex-shrink-0 mx-4 md:mx-5"
          >
            {/* Left Content Column with dedicated padding */}
            <div className="flex-1 flex flex-col justify-between h-full p-6 sm:p-8 md:pl-14">
              {/* Logo */}
              <div className="h-8 flex items-center">
                <img
                  src={item.logo}
                  alt="Brand Logo"
                  className="h-5 w-auto object-contain"
                />
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg md:text-base font-medium text-black leading-snug my-6 font-interd">
                {item.quote}
              </p>

              {/* Author Information */}
              <div>
                <h4 className="text-xl md:text-xl font-medium text-black font-interd">
                  {item.name}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-800 font-medium mt-1 font-interd">
                  {item.role}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-700 font-normal mt-0.5 font-interd">
                  {item.location}
                </p>
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
  )
}

export default Testimonials