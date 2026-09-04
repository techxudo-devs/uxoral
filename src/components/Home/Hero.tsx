"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Custom SVGs matching the exact rounded aesthetic from the screenshots
const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.2 2.38a2 2 0 0 1 1.6 0l8 3.8A2 2 0 0 1 22 8.01V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.01a2 2 0 0 1 1.2-1.83l8-3.8zM15 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
)

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM18 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM4 18c0-2.5 2.5-4 6-4s6 1.5 6 4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM15 18c.2-.9.8-1.7 1.8-2.2 1.3-.6 2.8-.8 4.2-.8 1 0 1.8.5 2 1.3a1 1 0 0 1-.9 1.2H15z" />
  </svg>
)

const BookmarkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 3a3 3 0 0 0-3 3v14a1 1 0 0 0 1.6.8l7.4-5.55 7.4 5.55A1 1 0 0 0 21 20V6a3 3 0 0 0-3-3H6z" />
  </svg>
)

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm16 3H4l8 5 8-5z" />
  </svg>
)

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF3B30">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const navItems = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'about', label: 'About', icon: UsersIcon },
  { id: 'bookmark', label: 'Saved', icon: BookmarkIcon },
  { id: 'contact', label: 'Contact', icon: MailIcon },
]

// High-quality images matching the reference screenshots
const CARDS_DATA = [
  {
    id: 1,
    src: "images/hero1.webp",
    alt: "Dark hoodie portrait",
  },
  {
    id: 2,
    src: "images/hero2.webp",
    alt: "Colorful candies",
  },
  {
    id: 3,
    src: "images/hero3.webp",
    alt: "Curly hair hat portrait",
  },
  {
    id: 4,
    src: "images/hero3.webp",
    alt: "Male portrait",
  },
  {
    id: 5,
    src: "images/hero5.webp",
    alt: "Blue portrait",
  },
  {
    id: 6,
    src: "images/hero1.webp",
    alt: "Pink model",
  },
  {
    id: 7,
    src: "images/hero2.webp",
    alt: "Yellow model",
  },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  // Infinite right-to-left stacking loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS_DATA.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Calculate position offset relative to active card
  const getOffset = (index: number) => {
    const total = CARDS_DATA.length
    let diff = index - activeIndex

    // Handle circular wrap around
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    return diff
  }

  return (
    <section className="relative w-full min-h-screen bg-white text-black overflow-hidden flex flex-col justify-between select-none pb-10">
      {/* Background Vertical Guide Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-8 md:px-40 z-0 pb-16">
        <div className="w-[1px] h-full bg-gray-200 relative flex flex-col justify-between items-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#FF5420] rounded-full" />
            <span className="text-[11px] font-medium text-black whitespace-nowrap tracking-tight font-interd">
              [ Grow Fast ]
            </span>
          </div>
        </div>
        <div className="w-[1px] h-full bg-gray-200 relative flex flex-col justify-between items-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#FF5420] rounded-full" />
            <span className="text-[11px] font-medium text-black whitespace-nowrap tracking-tight font-interd">
              [ Grow Fast ]
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="relative z-30 flex items-center justify-between px-6 md:px-6 py-5">
        <button className="flex items-center gap-2 bg-[#FF5420] text-white pl-1 pr-2 py-1 rounded-full font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-white flex flex-col items-center justify-center gap-[3px]">
            <span className="w-3.5 h-[2px] bg-[#FF5420] rounded-full"></span>
            <span className="w-3.5 h-[2px] bg-[#FF5420] rounded-full"></span>
          </div>
          <span className="font-medium font-interd text-lg tracking-tight">Menu</span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/Ulogo.svg" alt="Uxoral Logo" className="w-7 h-7" />
          <span className="text-2xl font-semibold font-interd tracking-tight text-black">
            Uxoral
          </span>
        </div>

        <button className="bg-[#FF5420] text-white px-5 py-1 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity cursor-pointer">
          Contact
        </button>
      </header>

      {/* Main Content Body */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-4 md:pt-8">
        {/* Main Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[118px] font-semibold text-center tracking-tight leading-none text-black z-20 max-w-7xl px-4 font-interd">
          We build the next
        </h1>

        {/* Big Background Typography (UXORA) */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <span className="text-[140px] sm:text-[220px] md:text-[280px] lg:text-[320px] font-bold text-[#F3F3F3] tracking-tighter leading-none block font-interd">
            UXORA
          </span>
        </div>

        {/* POSITIONAL STACKING CAROUSEL CONTAINER */}
        <div className="relative z-20 flex items-center justify-center mt-4 md:mt-8 h-[310px] sm:h-[360px] md:h-[400px] w-full max-w-5xl">
          {CARDS_DATA.map((card, index) => {
            const offset = getOffset(index)
            const absOffset = Math.abs(offset)

            // Skip rendering items far outside the view
            if (absOffset > 3) return null

            // Precise offset calculation for tight overlap without shadows or borders
            let x = 0
            let scale = 1
            let zIndex = 50
            let opacity = 1

            if (offset === 0) {
              x = 0
              scale = 1
              zIndex = 50
              opacity = 1
            } else if (offset === 1) {
              x = 100
              scale = 0.92
              zIndex = 40
              opacity = 1
            } else if (offset === 2) {
              x = 185
              scale = 0.85
              zIndex = 30
              opacity = 1
            } else if (offset === -1) {
              x = -100
              scale = 0.92
              zIndex = 40
              opacity = 1
            } else if (offset === -2) {
              x = -185
              scale = 0.85
              zIndex = 30
              opacity = 1
            } else if (offset >= 3) {
              x = 260
              scale = 0.75
              zIndex = 10
              opacity = 0
            } else if (offset <= -3) {
              x = -260
              scale = 0.75
              zIndex = 10
              opacity = 0
            }

            return (
              <motion.div
                key={card.id}
                animate={{
                  x,
                  scale,
                  zIndex,
                  opacity,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.25, 1, 0.5, 1], // Smooth natural spring curve
                }}
                className="absolute w-[180px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[330px] md:h-[350px] rounded-3xl overflow-hidden bg-gray-100 select-none cursor-pointer"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center pointer-events-none"
                />
              </motion.div>
            )
          })}
        </div>

        {/* BOTTOM SECTION - Agency Tagline & Social Proof */}
        <div className="relative z-20 flex flex-col items-center text-center mt-12 md:mt-16 max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black leading-tight font-interd">
            The European Creative Agency developing <br className="hidden sm:block" />
            the future of commerce
          </h2>

          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2.5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Founder 1"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover grayscale"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Founder 2"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover grayscale"
                />
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
                  alt="Founder 3"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover grayscale"
                />
              </div>
              <div className="text-xs text-left font-medium text-gray-900 leading-tight font-interd">
                Loved by 500+ <br />
                Founders
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#1C252C] flex items-center justify-center relative">
                <span className="text-white text-xs font-bold leading-none">C</span>
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#FF5420] rounded-full"></span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-gray-900 font-interd">
                  13 Reviews
                </span>
                <div className="flex items-center gap-0.5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LEFT SIDEBAR NAVIGATION */}
      <div className="absolute left-6 md:left-10 top-[35%] -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3">
        {navItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="relative group flex items-center">
              <button
                aria-label={item.label}
                className="w-12 h-12 md:w-14 md:h-14 bg-[#EBE8E1] rounded-xl flex items-center justify-center transition-all duration-300 ease-out group-hover:-rotate-8 group-hover:scale-105 cursor-pointer z-10"
              >
                <div className={`${index === 0 ? "text-[#1F201C]" : "text-[#888F82]"} group-hover:text-[#1F201C] transition-colors duration-300`}>
                  <Icon />
                </div>
              </button>

              <div className="absolute left-16 md:left-18 px-4 py-2 bg-[#EBE8E1] text-[#1F201C] text-xs font-medium rounded-lg font-interd whitespace-nowrap opacity-0 -translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out z-0">
                {item.label}
              </div>
            </div>
          )
        })}
      </div>

      {/* RIGHT SIDEBAR SCROLL INDICATOR */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-3">
        <span className="text-xs font-interd font-medium text-gray-500 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gray-400 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[5px] border-t-gray-600"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero