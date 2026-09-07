"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Trophy Icon for Awards Card
const TrophyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V18H8v2h8v-2h-3v-2.1c2.12-.39 3.75-2.03 4.39-4.24C19.8 11.23 21 9.25 21 7V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
  </svg>
)

// Up Right Arrow Icon
const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
)

const Featured = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Track scroll position for 3D tilt animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center 45%'],
  })

  // Left Column Animation: Tilted Right Down -> Straight
  const col1RotateX = useTransform(scrollYProgress, [0, 1], [28, 0])
  const col1RotateY = useTransform(scrollYProgress, [0, 1], [15, 0])
  const col1RotateZ = useTransform(scrollYProgress, [0, 1], [8, 0])
  const col1Y = useTransform(scrollYProgress, [0, 1], [120, 0])

  // Center Column Animation: Tilted Center Down -> Straight
  const col2RotateX = useTransform(scrollYProgress, [0, 1], [28, 0])
  const col2Y = useTransform(scrollYProgress, [0, 1], [120, 0])

  // Right Column Animation: Tilted Left Down -> Straight
  const col3RotateX = useTransform(scrollYProgress, [0, 1], [28, 0])
  const col3RotateY = useTransform(scrollYProgress, [0, 1], [-15, 0])
  const col3RotateZ = useTransform(scrollYProgress, [0, 1], [-8, 0])
  const col3Y = useTransform(scrollYProgress, [0, 1], [120, 0])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-[#fff] text-black py-10 md:py-14 px-6 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            {/* Top Tag */}
            <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
              <span className="text-[#2563EB] font-medium">//</span>
              <span className="text-gray-700">ABOUT US</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black font-interd mb-4">
              Who We Are?
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-800 max-w-lg font-interd">
              <span className="text-[#2563EB] font-medium">We craft visually striking stories that move people.y</span>{' '}
              Whether it’s a high-energy commercial, a cinematic brand film, or sleek social content, we bring ideas to life.
            </p>
          </div>

          {/* Right Button with Bottom-to-Top Black Fill Hover Effect */}
          <button className="relative overflow-hidden bg-[#2563EB] text-white px-6 py-3 rounded-full font-medium text-sm w-fit cursor-pointer font-interd group">
            {/* Smooth Fill Layer */}
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full z-0 pointer-events-none" />

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2 text-white">
              <span>Get In Touch</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>

        {/* 3D Perspective Container */}
        <div style={{ perspective: '1200px' }} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-4 items-start">
            
            {/* COLUMN 1 (LEFT) - Total height: 76px + 16px + 360px = 452px */}
            <motion.div
              style={{
                rotateX: col1RotateX,
                rotateY: col1RotateY,
                rotateZ: col1RotateZ,
                y: col1Y,
                transformStyle: 'preserve-3d',
              }}
              className="flex flex-col gap-4 w-full"
            >
              {/* Top Small Card: Brands (76px) */}
              <div className="bg-white rounded-xl h-[76px] px-5 py-3 flex items-center justify-between border border-gray-200">
                <div className="flex -space-x-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Team 1"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover grayscale"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                    alt="Team 2"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover grayscale"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
                    alt="Team 3"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover grayscale"
                  />
                </div>
                <span className="text-xs font-medium text-black font-interd">
                  200+ Brands Worldwide
                </span>
              </div>

              {/* Bottom Large Card: Testimonial & 92% (360px) */}
              <div className="bg-white rounded-xl h-[360px] p-6 sm:p-7 flex flex-col justify-between border border-gray-200">
                <div>
                  <span className="text-2xl font-bold text-black block mb-3 font-interd">
                    “”
                  </span>
                  <p className="text-sm sm:text-base font-medium text-black leading-tight font-interd">
                    Our platform feels faster, smoother, and just works better and
                    intuitively. The engagement metrics don’t lie.
                  </p>
                </div>
                <div>
                  <span className="text-4xl sm:text-4xl font-semibold text-black tracking-tight block font-interd">
                    92<span className="text-gray-400 font-normal">%</span>
                  </span>
                  <span className="text-xs text-gray-600 font-normal mt-1 block font-interd">
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </motion.div>

            {/* COLUMN 2 (CENTER) - Total height: 360px + 16px + 76px = 452px */}
            <motion.div
              style={{
                rotateX: col2RotateX,
                y: col2Y,
                transformStyle: 'preserve-3d',
              }}
              className="flex flex-col gap-4 w-full"
            >
              {/* Top Large Card: Model Image (360px) */}
              <div className="bg-white rounded-xl h-[360px] overflow-hidden border border-gray-200 relative">
                <img
                  src="images/girl.webp"
                  alt="Futuristic Model"
                  className="w-full h-full object-cover object-center pointer-events-none"
                />
              </div>

              {/* Bottom Small Card: Orange Awards (76px) */}
              <div className="bg-[#2563EB] text-white rounded-xl h-[76px] px-5 py-3 flex items-center justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-medium tracking-tight block leading-none font-interd">
                    20+
                  </span>
                  <span className="text-[11px] text-white font-normal mt-1 block font-interd">
                    Global Awards & Features
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white text-[#2563EB] flex items-center justify-center flex-shrink-0">
                  <TrophyIcon />
                </div>
              </div>
            </motion.div>

            {/* COLUMN 3 (RIGHT) - Total height: 360px + 16px + 76px = 452px */}
            <motion.div
              style={{
                rotateX: col3RotateX,
                rotateY: col3RotateY,
                rotateZ: col3RotateZ,
                y: col3Y,
                transformStyle: 'preserve-3d',
              }}
              className="flex flex-col gap-4 w-full"
            >
              {/* Top Large Card: Testimonials & 5K+ (360px) */}
              <div className="bg-white rounded-xl h-[360px] p-6 sm:p-7 flex flex-col justify-between border border-gray-200">
                <div>
                  <p className="text-xs sm:text-base font-medium text-black leading-tight font-interd">
                    <span className="text-[#2563EB] font-bold">250+</span>{' '}
                    testimonial with trusted by YC-backed, VC-funded, a16z,
                    Sequoia
                  </p>
                </div>
                <div>
                  <span className="text-4xl sm:text-5xl font-semibold text-black tracking-tight block font-interd">
                    5K<span className="text-[#2563EB]">+</span>
                  </span>
                  <span className="text-xs text-gray-600 font-normal mt-1 block font-interd">
                    Global Project
                  </span>
                </div>
              </div>

              {/* Bottom Small Card: Available for work (76px) */}
              <div className="bg-white rounded-xl h-[76px] px-5 py-3 flex items-center justify-between border border-gray-200">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
                  </span>
                  <span className="text-xs font-medium text-black font-interd">
                    Available For Work
                  </span>
                </div>
                <button
                  aria-label="Available for work link"
                  className="w-8 h-8 rounded-full border border-gray-200 text-gray-600 flex items-center justify-center hover:border-black hover:text-black transition-colors cursor-pointer"
                >
                  <ArrowUpRight />
                </button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Featured