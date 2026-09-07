"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface BlogPost {
  id: number
  date: string
  title: string
  image: string
  alt: string
  link: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: 'January 8, 2026',
    title: 'Roop',
    image:
      'images/blog1.webp',
    alt: 'Colorful artwork poster',
    link: '#',
  },
  {
    id: 2,
    date: 'October 25, 2025',
    title: 'Dhanak HYDR',
    image:
      'images/blog2.webp',
    alt: 'Typographic graphic poster',
    link: '#',
  },
  {
    id: 3,
    date: 'January 11, 2026',
    title: 'Agay Dekh',
    image:
      'images/blog3.webp',
    alt: 'Typography book on green lawn',
    link: '#',
  },
]

const Blogs = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  })

  // 3D Laying down -> Upright transform values
  const rotateX = useTransform(scrollYProgress, [0, 1], [35, 0])
  const y = useTransform(scrollYProgress, [0, 1], [130, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-black py-10 md:py-14 px-6 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          {/* Top Tag */}
          <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
            <span className="text-[#E11D48] font-medium">//</span>
            <span className="text-gray-700">Blogs & Articles</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black font-interd">
            Ideas, Stories & Creative Insight
          </h2>
        </div>

        {/* 3D Perspective Animation Container */}
        <div style={{ perspective: '1200px' }} className="w-full">
          <motion.div
            style={{
              rotateX,
              y,
              scale,
              transformStyle: 'preserve-3d',
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                className="flex flex-col cursor-pointer overflow-hidden rounded-xl bg-white"
              >
                {/* Image Container (No hover scaling) */}
                <div className="w-full h-[300px] sm:h-[350px] md:h-[380px] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover object-center pointer-events-none"
                  />
                </div>

                {/* White Details Box translated UP over the image with rounded top corners */}
                <div className="relative z-10 bg-white rounded-t-2xl -mt-5 pt-4 px-4 pb-2 flex flex-col">
                  <span className="text-xs text-gray-800 font-normal font-interd block mb-1">
                    {post.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium text-black tracking-tight leading-none font-interd">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Blogs