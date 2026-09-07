"use client"

import Marquee from 'react-fast-marquee'

const logos = [
  { id: 1, src: '/images/brand1.webp', alt: 'Coca Cola', size: 'h-40' },
  { id: 2, src: '/images/brand2.webp', alt: 'Tapal', size: 'h-20' },
  { id: 3, src: '/images/brand3.webp', alt: 'Alkaram Studio', size: 'h-26' },
  { id: 4, src: '/images/brand4.webp', alt: 'PSL', size: 'h-34' },
  { id: 5, src: '/images/brand5.png', alt: 'HBL', size: 'h-44' },
  { id: 6, src: '/images/brand6.png', alt: 'Coke Studio', size: 'h-30' },
  { id: 5, src: '/images/brand7.webp', alt: 'Pakistan Tobaco Company', size: 'h-30' },
  { id: 6, src: '/images/brand8.webp', alt: 'Pepsi', size: 'h-32' },
]

const LogoSlider = () => {
  return (
    <section id="brands" className="w-full bg-white border-y border-gray-200 overflow-hidden">
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
            className="flex items-center justify-center w-[220px] sm:w-[260px] md:w-[300px] h-34 sm:h-28 md:h-34 px-8 flex-shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${logo.size} w-auto object-contain`}
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default LogoSlider