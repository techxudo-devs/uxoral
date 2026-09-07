"use client"

import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="w-full select-none overflow-hidden font-interd">
      {/* TOP LIGHT SECTION */}
      <div className="bg-[#F3F3F5] text-black pt-10 md:pt-10 pb-24 md:pb-34 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* Col 1: Pages (Left Aligned) */}
          <div className="flex flex-col items-center text-left">
            <h3 className="text-base font-medium text-black mb-4 font-interd">
              Pages
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="font-medium text-black cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-black transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-black transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('works')}
                  className="text-gray-700 hover:text-black transition-colors cursor-pointer"
                >
                  Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('brands')}
                  className="text-gray-700 hover:text-black transition-colors cursor-pointer"
                >
                  Brands
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Follow Us (Center Aligned) */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-base font-medium text-black mb-4 font-interd">
              Follow Us
            </h3>
            <p className="text-xs sm:text-sm text-gray-900">
              mail@fepo.com
            </p>
            <p className="text-xs sm:text-sm text-gray-900 mt-1 mb-5">
              +91 0123456789
            </p>

            {/* Circular Social Icons (White bg -> Black on hover, Icon turns white) */}
            <div className="flex items-center gap-3">
              {/* <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a> */}
              <a
                href="https://www.instagram.com/fepo.worldwide/?hl=en"
                target="_blank"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              {/* <a
                href="#twitter"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
              >
                <FaXTwitter className="w-3.5 h-3.5" />
              </a> */}
              {/* <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a> */}
            </div>
          </div>

          {/* Col 3: Address (Right Aligned) */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <h3 className="text-base font-medium text-black mb-4 font-interd">
              Address
            </h3>
            <div className="text-xs sm:text-sm text-gray-900 leading-relaxed">
              <p>#21. North Street</p>
              <p>Velachery</p>
              <p>VelacheryChennai</p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BLACK SECTION WITH CENTER NOTCH LOGO */}
      <div className="bg-black text-white relative pt-10 md:pt-10 pb-6 px-6 md:px-12">
        {/* Giant U Logo Cutout dipping into black section */}
        {/* Giant U Logo Cutout dipping into black section (BIGGER SIZE) */}
        <Link href="/">
<div className="absolute left-1/2 -translate-x-1/2 -top-28 md:-top-36 w-56 h-56 md:w-64 md:h-64 rounded-full bg-[#F3F3F3] flex items-center justify-center p-1 z-20">
  <img
    src="/images/logo.webp"
    alt="Uxora Big Logo"
    className="w-50 h-50 object-cover pointer-events-none invert"
  />
</div>
</Link>

        {/* Social Pill Buttons (Borders convert to Orange on hover) */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 pb-10 z-10 relative">
          {/* Left Pills Group */}
          {/* <div className="flex items-center gap-4">
            <a
              href="#twitter"
              className="px-6 py-2.5 rounded-full border-3 border-white text-white text-xs sm:text-sm font-normal hover:border-[#2563EB] transition-colors duration-300 cursor-pointer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/fepo.worldwide/?hl=en" target='_blank'
              className="px-6 py-2.5 rounded-full border-3 border-white text-white text-xs sm:text-sm font-normal hover:border-[#2563EB] transition-colors duration-300 cursor-pointer"
            >
              Instagram
            </a>
          </div> */}

          {/* Right Pills Group */}
          {/* <div className="flex items-center gap-4">
            <a
              href="#facebook"
              className="px-6 py-2.5 rounded-full border-3 border-white text-white text-xs sm:text-sm font-normal hover:border-[#2563EB] transition-colors duration-300 cursor-pointer"
            >
              Facebook
            </a>
            <a
              href="#behance"
              className="px-6 py-2.5 rounded-full border-3 border-white text-white text-xs sm:text-sm font-normal hover:border-[#2563EB] transition-colors duration-300 cursor-pointer"
            >
              Behance
            </a>
          </div> */}
        </div>

        {/* Giant Bottom UXORA Typography */}
        <div className="w-full text-center overflow-hidden pt-4">
          <h1 className="text-[15vw] sm:text-[17vw] md:text-[18vw] font-black text-white leading-none select-none font-interd tracking-wider">
            FEPO
          </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer