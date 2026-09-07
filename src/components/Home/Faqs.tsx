"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "1. What is your typical project timeline?",
    answer: "Pricing depends on project requirements. We offer custom quotes after a discovery call.",
  },
  {
    id: 2,
    question: "2. How much do your projects cost?",
    answer: "Project costs vary based on scope, complexity, and specific requirements. Contact us for a detailed estimate tailored to your needs.",
  },
  {
    id: 3,
    question: "3. How involved will I be during the project?",
    answer: "We maintain close communication throughout the project with regular updates, milestone check-ins, and collaborative feedback sessions.",
  },
  {
    id: 4,
    question: "4. Who owns the final design and code?",
    answer: "You own 100% of the final design and code once the project is completed and final payment is received.",
  },
  {
    id: 5,
    question: "5. After Launch & Support",
    answer: "We provide ongoing support, maintenance packages, and post-launch optimization to ensure your site continues to perform flawlessly.",
  },
]

const Faqs = () => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    // If clicking the open item, close it; otherwise open the clicked item and close others
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#F3F3F5] text-black py-10 md:py-14 px-6 md:px-12 select-none">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-10">
        
        {/* Left Section */}
        <div className="flex-1 max-w-lg">
          {/* Top Tag */}
          <div className="flex items-center gap-1 text-xs font-interd uppercase mb-3">
            <span className="text-[#2563EB] font-medium">//</span>
            <span className="text-gray-700">FAQS</span>
          </div>

          {/* Heading - font-medium as requested */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-[1.1] font-interd">
            Frequently <br />
            Asked <br />
            Questions!
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-gray-800 font-normal leading-relaxed max-w-sm mt-6 mb-8 font-interd">
            Welcome to my corner of thoughts, ideas, and insights. This space is
            where share everything from design.
          </p>

          {/* Orange Pill Button with Bottom-to-Top Black Fill Hover */}
          <button className="relative overflow-hidden bg-[#2563EB] text-white px-6 py-3 rounded-full font-medium text-sm cursor-pointer font-interd group">
            {/* Smooth Fill Layer */}
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full z-0 pointer-events-none" />

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2 text-white">
              <span>More About Us</span>
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

        {/* Right Section - Accordion List */}
        <div className="w-full lg:max-w-xl flex flex-col gap-3.5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.id}
                onClick={() => toggleFaq(index)}
                className="bg-white rounded-xl p-4 sm:px-5 sm:py-4 transition-all cursor-pointer select-none"
              >
                {/* Accordion Title / Question Header */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm sm:text-base md:text-[17px] font-medium text-black font-interd leading-snug">
                    {faq.question}
                  </h3>
                  <button
                    aria-label="Toggle FAQ"
                    className="text-gray-800 hover:text-black w-6 h-6 flex items-center justify-center flex-shrink-0 transition-colors"
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[1.5]" />
                    )}
                  </button>
                </div>

                {/* Animated Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs sm:text-sm text-gray-800 font-normal leading-relaxed font-interd max-w-sm">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Faqs