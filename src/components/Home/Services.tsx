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
    title: 'Web Design',
    pills: [
      'Landing',
      'Brochure Site',
      'Corporate Website',
      'E-Commerce',
      'Web 3.0',
      'UI/UX Design',
    ],
    description:
      'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project. While maintaining bespoke originality, our team will focus on responsive design and optimize your website for any device and interface. Your new website will attract desirable target audiences, boost engagement, drive sales, and increase the brand value of your business.',
    link: '#',
  },
  {
    id: '02',
    title: 'Branding',
    pills: [
      'Print Graphics',
      'Conference Event Branding',
      'Deck Designs',
      'Digital Brand Collateral',
      'Social Media Designs',
    ],
    description:
      'Experienced with top-grade brand design for a wide range of products from consumer goods to startup ideas. Your brand identity will exceed all expectations with fresh yet pragmatic design ideas realistic to produce by the creatives at Uxora. Branding is what makes us fall in love with some of our favorite products. Make yours a favorite.',
    link: '#',
  },
  {
    id: '03',
    title: 'Graphic Design',
    pills: [
      'Vector Illustrations',
      'Marketing Collateral',
      'Poster & Billboard',
      'Infographics',
      'Custom Iconography',
    ],
    description:
      'Our graphic design solutions convey your message with visual clarity and aesthetic power. From high-converting digital ad graphics to physical print media, we design assets that capture attention and elevate your brand presence.',
    link: '#',
  },
  {
    id: '04',
    title: 'Packaging Design',
    pills: [
      'Consumer Goods Packaging',
      'Label & Box Design',
      'Eco-Friendly Materials',
      '3D Product Renderings',
    ],
    description:
      'Experienced with top-grade packaging design for a wide range of products from consumer goods to startup ideas. Your packaging design will exceed all expectations with fresh yet pragmatic design ideas realistic to produce by the creatives at Uxora. Packaging design is what makes us fall in love with some of our favorite products. Make yours a favorite.',
    link: '#',
  },
  {
    id: '05',
    title: 'Video Production',
    pills: [
      'Corporate Video Production',
      'Event Video Production',
      'Promotional Videos',
      'Post-Production & Editing',
    ],
    description:
      'Uxora specializes in video production since 2015 in Manhattan, our talented team leverages over 30 years of combined experience working with advertising agencies and brands to create exceptional visual narratives. We are dedicated to video excellence, crafting impactful content that authentically engages audiences and elevates brands.',
    link: '#',
  },
]

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll inside the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Synchronize scroll progress to the active service index (0 to 4)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const totalServices = servicesData.length
    const newIndex = Math.min(
      Math.floor(latest * totalServices),
      totalServices - 1
    )
    if (newIndex !== activeIndex && newIndex >= 0) {
      setActiveIndex(newIndex)
    }
  })

  const activeService = servicesData[activeIndex]

  return (
    // Outer scroll container (500vh to give enough scroll distance for 5 steps)
    <section ref={containerRef} className="relative w-full h-[500vh] bg-white text-black font-interd select-none">
      
      {/* Sticky Inner Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 md:py-14 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6">
            {/* Left Title */}
            <div>
              <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
            <span className="text-[#FF5420] font-medium">//</span>
            <span className="text-gray-700">FEATURED WORK</span>
          </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black font-interd">
                Creative Services
              </h2>
            </div>

            {/* Right Header Paragraph */}
            <p className="text-xs sm:text-sm text-gray-900 font-normal leading-relaxed max-w-md font-interd">
              We build the next in commerce on Shopify. From strategy to design,
              development to retention, we've got you covered. 9+ years of
              experience, 200+ stores launched, 60+ experts and we're your
              partner from discovery to launch and beyond.
            </p>
          </div>

          {/* Main Interactive Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
            
            {/* Left Column - 5 Service Points */}
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
                        isActive ? 'text-black' : 'text-gray-300'
                      }`}
                    >
                      {service.id}
                    </span>

                    {/* Step Title */}
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl tracking-tight font-interd transition-colors duration-300 ${
                        isActive
                          ? 'text-black font-medium'
                          : 'text-gray-300 hover:text-gray-400'
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col gap-6"
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
                      className="inline-flex items-center gap-1.5 text-[#FF5420] text-xs sm:text-sm font-medium hover:underline font-interd transition-all"
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