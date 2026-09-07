"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ProcessCard {
  id: number
  number: string
  title: string
  description: string
  titleOrange?: boolean
  numberOrange?: boolean
}

const processCards: ProcessCard[] = [
  {
    id: 1,
    number: '1',
    title: 'Discovery',
    description: 'We dive deep into your brand, audience, and goals to',
    titleOrange: false,
    numberOrange: false,
  },
  {
    id: 2,
    number: '2',
    title: 'Strategy & Design',
    description: 'We craft a clear direction and design experiences that align creativity',
    titleOrange: true, // Only Card 2 Title is orange
    numberOrange: false,
  },
  {
    id: 3,
    number: '3',
    title: 'Build & Launch',
    description: 'Our team brings the vision to life with precision, testing every detail.',
    titleOrange: false,
    numberOrange: true, // Number 3 is orange by default
  },
  {
    id: 4,
    number: '4',
    title: 'Optimize & Scale',
    description: 'We measure performance, refine continuously, and help your product',
    titleOrange: false,
    numberOrange: false,
  },
]

const Points4 = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll trigger timing
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center 45%'],
  })

  // Common 3D X-axis tilt - Increased initial tilt
  const rotateX = useTransform(scrollYProgress, [0, 1], [42, 0])

  // Card 1: Significantly more tilted right (+24deg Z, -20deg Y) -> Ends LOWER (+30px Y)
  const rZ1 = useTransform(scrollYProgress, [0, 1], [24, 0])
  const rY1 = useTransform(scrollYProgress, [0, 1], [-20, 0])
  const y1 = useTransform(scrollYProgress, [0, 1], [150, 30])

  // Card 2: Significantly more tilted left (-18deg Z, +18deg Y) -> Ends HIGHER (-25px Y)
  const rZ2 = useTransform(scrollYProgress, [0, 1], [-18, 0])
  const rY2 = useTransform(scrollYProgress, [0, 1], [18, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -25])

  // Card 3: Significantly more tilted right (+18deg Z, -18deg Y) -> Ends LOWER (+30px Y)
  const rZ3 = useTransform(scrollYProgress, [0, 1], [18, 0])
  const rY3 = useTransform(scrollYProgress, [0, 1], [-18, 0])
  const y3 = useTransform(scrollYProgress, [0, 1], [150, 30])

  // Card 4: Significantly more tilted left (-24deg Z, +20deg Y) -> Ends HIGHER (-25px Y)
  const rZ4 = useTransform(scrollYProgress, [0, 1], [-24, 0])
  const rY4 = useTransform(scrollYProgress, [0, 1], [20, 0])
  const y4 = useTransform(scrollYProgress, [0, 1], [80, -25])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F3F3F5] text-black py-10 md:py-14 px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
            <span className="text-[#2563EB] font-medium">//</span>
            <span className="text-gray-700">WORKING PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black font-interd">
            Let’s See Our Work Process
          </h2>
        </div>

        {/* 3D Perspective Container */}
        <div style={{ perspective: '1100px' }} className="w-full relative">
          
          {/* ORGANIC SOFT GLOWING BACKDROP */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
            <div className="w-[110%] max-w-[1150px] h-[320px] bg-gradient-to-r from-[#FF007A] via-[#7C3AED] via-[#2563EB] to-[#38BDF8] blur-[95px] rounded-full transform translate-y-2" />
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 relative z-10">
            {processCards.map((card, index) => {
              const cardRotateZ =
                index === 0 ? rZ1 : index === 1 ? rZ2 : index === 2 ? rZ3 : rZ4
              const cardRotateY =
                index === 0 ? rY1 : index === 1 ? rY2 : index === 2 ? rY3 : rY4
              const cardY =
                index === 0 ? y1 : index === 1 ? y2 : index === 2 ? y3 : y4

              return (
                <motion.div
                  key={card.id}
                  style={{
                    rotateX,
                    rotateY: cardRotateY,
                    rotateZ: cardRotateZ,
                    y: cardY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="group relative bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between w-[200px] sm:w-[225px] md:w-[250px] h-[380px] sm:h-[400px] md:h-[410px] select-none cursor-pointer flex-shrink-0"
                >
                  {/* BIG CENTERED NUMBER */}
                  <div className="flex-1 flex items-center justify-center pt-2 pb-4">
                    <span
                      className={`text-[120px] sm:text-[140px] md:text-[200px] font-normal leading-none font-interd block text-center transition-colors duration-300 group-hover:text-[#2563EB]`}
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Bottom Text Content */}
                  <div>
                    <h3
                      className={`text-base sm:text-lg font-semibold mb-1.5 font-interd ${
                        card.titleOrange ? 'text-[#2563EB]' : 'text-black'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-800 font-normal font-interd">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Points4