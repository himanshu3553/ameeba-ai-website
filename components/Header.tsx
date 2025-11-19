'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md'
          : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a
              href="/"
              className={`text-2xl md:text-3xl font-bold transition-colors ${
                scrolled
                  ? 'text-gray-900 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
              }`}
            >
              Ameeba AI
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="#cta"
              className="px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm md:text-base"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

