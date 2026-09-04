"use client"

import Marquee from 'react-fast-marquee'

const logos = [
  { id: 1, src: '/images/logo1.svg', alt: 'Logo 1' },
  { id: 2, src: '/images/logo2.svg', alt: 'Logo 2' },
  { id: 3, src: '/images/logo3.svg', alt: 'Logo 3' },
  { id: 4, src: '/images/logo4.svg', alt: 'Logo 4' },
  { id: 5, src: '/images/logo5.svg', alt: 'Logo 5' },
  { id: 6, src: '/images/logo6.svg', alt: 'Logo 6' },
]

const LogoSlider = () => {
  return (
    <section className="w-full bg-white border-y border-gray-200 overflow-hidden">
      <Marquee
        gradient={false}
        speed={70}
        pauseOnHover={false}
        pauseOnClick={false}
        direction="left"
        className="flex items-center"
      >
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center w-[220px] sm:w-[260px] md:w-[300px] h-24 sm:h-28 md:h-32 border-r border-gray-200 px-8 flex-shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-8 sm:max-h-9 md:max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default LogoSlider