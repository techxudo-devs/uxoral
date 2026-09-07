"use client"

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

interface ServiceItem {
  id: string
  title: string
  pills: string[]
  description: string
  link: string
}

const servicesData: ServiceItem[] = [
  {
    id: '01',
    title: 'Video Production',
    pills: [
      'Brand Films',
      'Cinematic Commercials',
      'Motion Graphics',
      'Color Grading',
      'Sound Design',
      'Post-Production',
    ],
    description:
      'We create cinematic brand stories that connect emotionally with your audience, elevating your identity through high-impact visuals and thoughtful storytelling.',
    link: '#',
  },
  {
    id: '02',
    title: 'Video Direction',
    pills: [
      'Event Highlight Reels',
      'Creative Direction',
      'Scriptwriting',
      'Storyboarding',
      'Talent Casting',
      'On-Set Direction',
    ],
    description:
      'Our team captures key moments from your events and transforms them into compelling highlight reels that extend the experience and amplify engagement.',
    link: '#',
  },
  {
    id: '03',
    title: 'Video Filming',
    pills: [
      'Product Demo Videos',
      'Cinematography',
      'Commercial Shoots',
      'Drone Footage',
      'Studio Filming',
      'B-Roll Capture',
    ],
    description:
      'Showcase your product’s features and benefits with clean, engaging demo videos that educate, inform, and convert viewers into customers.',
    link: '#',
  },
  {
    id: '04',
    title: 'Video Entertain',
    pills: [
      'Short-Form Content',
      'Reels & TikToks',
      'Memes & Viral Clips',
      'Social Cutdowns',
      'Animation',
      'Platform Optimization',
    ],
    description:
      'We craft short-form, platform-optimized content designed to stop the scroll, spark interaction, and maximize reach across all major social media channels.',
    link: '#',
  },
]

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll inside the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Synchronize scroll progress smoothly without flickering
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const totalServices = servicesData.length
    const progress = Math.max(0, Math.min(0.999, latest))
    const newIndex = Math.floor(progress * totalServices)

    setActiveIndex((prevIndex) => {
      if (newIndex !== prevIndex && newIndex >= 0 && newIndex < totalServices) {
        return newIndex
      }
      return prevIndex
    })
  })

  const activeService = servicesData[activeIndex]

  return (
    // Outer scroll container
    <section id="services" ref={containerRef} className="relative w-full h-[400vh] bg-white text-black font-interd select-none">
      
      {/* Sticky Inner Viewport with GPU Acceleration */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 md:py-14 px-6 md:px-12 overflow-hidden transform-gpu">
        <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6">
            {/* Left Title */}
            <div>
              <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
                <span className="text-[#E11D48] font-medium">//</span>
                <span className="text-gray-700">SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black font-interd">
                What We Do?
              </h2>
            </div>

            {/* Right Header Paragraph */}
            <p className="text-xs sm:text-sm text-gray-900 font-normal leading-relaxed max-w-md font-interd">
              Crafting visuals and compelling stories for brands that move the
              world. From concept to screen, we produce high-impact video
              content that elevates your identity and connects with your
              audience.
            </p>
          </div>

          {/* Main Interactive Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto transform-gpu">
            
            {/* Left Column - 4 Service Points */}
            <div className="lg:col-span-6 flex flex-col gap-5 md:gap-6">
              {servicesData.map((service, index) => {
                const isActive = activeIndex === index

                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveIndex(index)}
                    className="flex items-baseline gap-4 cursor-pointer group transition-all duration-300"
                  >
                    {/* Step Number */}
                    <span
                      className={`text-xs sm:text-sm font-normal font-interd transition-colors duration-300 ${
                        isActive ? 'text-black font-medium' : 'text-gray-300'
                      }`}
                    >
                      {service.id}
                    </span>

                    {/* Step Title */}
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl tracking-tight font-interd transition-colors duration-300 ${
                        isActive
                          ? 'text-black font-medium'
                          : 'text-gray-300 hover:text-gray-400 font-medium'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                )
              })}
            </div>

            {/* Right Column - Active Content Details */}
            <div className="lg:col-span-6 flex flex-col justify-center min-h-[320px] pl-0 lg:pl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="flex flex-col gap-6 transform-gpu will-change-transform"
                >
                  {/* Gray Pill Tags */}
                  <div className="flex flex-wrap gap-2 md:gap-2.5">
                    {activeService.pills.map((pill, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F3F3F5] text-black text-xs sm:text-sm font-normal px-4 py-2 rounded-full font-interd"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed max-w-lg font-interd pt-2">
                    {activeService.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="pt-2 border-t border-gray-100">
                    <a
                      href={activeService.link}
                      className="inline-flex items-center gap-1.5 text-[#E11D48] text-xs sm:text-sm font-medium hover:underline font-interd transition-all"
                    >
                      <span>Learn More</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Services