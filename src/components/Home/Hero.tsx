"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Settings, Briefcase, BadgeCheck } from 'lucide-react'
import Link from 'next/link'

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF3B30">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Users },
  { id: 'services', label: 'Services', icon: Settings },
  { id: 'works', label: 'Works', icon: Briefcase },
  { id: 'brands', label: 'Brands', icon: BadgeCheck },
]

// High-quality images matching the reference screenshots
const CARDS_DATA = [
  {
    id: 1,
    src: "images/fepohero1.jpg",
    alt: "Dark hoodie portrait",
  },
  {
    id: 2,
    src: "images/fepohero2.jpg",
    alt: "Colorful candies",
  },
  {
    id: 3,
    src: "images/fepohero3.jpg",
    alt: "Curly hair hat portrait",
  },
  {
    id: 4,
    src: "images/fepohero4.jpg",
    alt: "Male portrait",
  },
  {
    id: 5,
    src: "images/fepohero5.png",
    alt: "Blue portrait",
  },
  {
    id: 6,
    src: "images/fepohero6.jpg",
    alt: "Pink model",
  },
  {
    id: 7,
    src: "images/fepohero7.webp",
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

  // Smooth scroll to a section by its id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative w-full min-h-screen bg-white text-black overflow-hidden flex flex-col justify-between select-none pb-10">
      {/* Background Vertical Guide Lines */}
      <div className="absolute inset-0 pointer-events-none md:flex hidden flex justify-between px-8 md:px-40 z-0 pb-16">
        <div className="w-[1px] h-full bg-gray-200 relative flex flex-col justify-between items-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#E11D48] rounded-full" />
            <span className="text-[11px] font-medium text-black whitespace-nowrap tracking-tight font-interd">
              [ Fepo ]
            </span>
          </div>
        </div>
        <div className="w-[1px] h-full bg-gray-200 relative flex flex-col justify-between items-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#E11D48] rounded-full" />
            <span className="text-[11px] font-medium text-black whitespace-nowrap tracking-tight font-interd">
              [ Fepo ]
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="relative z-30 flex items-center justify-center px-6 md:px-6 py-2">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/images/logo.webp" alt="Fepo Logo" className="w-20 h-20 invert" />
          </div>
        </Link>

        <div className="absolute right-6 md:right-10 md:block hidden">
          <button className="bg-[#E11D48] text-white px-5 py-1 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity cursor-pointer">
            Contact
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-4 md:pt-8 md:-mt-4">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-semibold text-center tracking-tight leading-none text-black z-20 max-w-7xl px-4 font-interd">
          crafting visuals & stories
        </h1>

        {/* Big Background Typography (UXORA) */}
        <div className="absolute top-[50%] left-[51%] -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <span className="text-[140px] sm:text-[220px] md:text-[280px] lg:text-[320px] font-black text-[#e5e4e4b6] tracking-widest leading-none block font-interd">
            FEPO
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
                className="absolute w-[250px] sm:w-[220px] md:w-[250px] h-[280px] sm:h-[330px] md:h-[350px] rounded-3xl overflow-hidden bg-gray-100 select-none cursor-pointer"
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
            Crafting visuals and compelling stories for brands that move the world.
          </h2>

          {/* <div className="flex items-center justify-center gap-8 mt-6">
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
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#E11D48] rounded-full"></span>
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
          </div> */}
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
                onClick={() => scrollToSection(item.id)}
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