'use client'

import { useState, useEffect, useRef } from 'react'

const features = [
  {
    title: 'Prompt Creation & Versioning',
    description: 'Create and manage prompts with an intuitive interface. Build multiple versions of the same prompt, track changes over time, and maintain a complete history of all iterations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    highlights: [
      'Intuitive prompt editor',
      'Multiple versions per prompt',
      'Complete change history',
      'Easy version comparison'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    title: 'AI-Powered Enhancement',
    description: 'Leverage advanced AI to enhance and optimize your prompts automatically. Provide a brief description and let our AI generate improved versions, create variations, and suggest optimizations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    highlights: [
      'AI-powered prompt enhancement',
      'Automatic version generation',
      'Smart optimization suggestions',
      'One-click AI improvements'
    ],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    title: 'A/B Testing for Prompts',
    description: 'Perform comprehensive split testing to scientifically determine which prompt version performs best. Run simultaneous tests, compare results with detailed analytics.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    highlights: [
      'Split testing built-in',
      'Real-time performance metrics',
      'Statistical significance analysis',
      'Winner identification'
    ],
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-50 to-blue-50',
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="features" className={`relative py-32 bg-white overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-600">Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Optimize Prompts
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful tools designed for AI developers who demand precision and performance
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className={`
                relative h-full p-8 rounded-3xl border-2 transition-all duration-500
                ${hoveredIndex === index 
                  ? 'border-transparent bg-white shadow-2xl scale-105' 
                  : 'border-gray-200 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl'
                }
              `}>
                {/* Gradient background on hover */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.bgGradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
                `} />

                {/* Icon */}
                <div className={`
                  relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} 
                  flex items-center justify-center text-white mb-6
                  transform transition-all duration-500
                  ${hoveredIndex === index ? 'scale-110 rotate-3' : 'scale-100'}
                  shadow-lg group-hover:shadow-xl
                `}>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {feature.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start text-sm group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <svg className={`w-5 h-5 text-${feature.gradient.split('-')[1]}-500 mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative element */}
                <div className={`
                  absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient}
                  opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Explore All Features</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
