'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.4) 50%, transparent 70%)',
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 70%)',
            right: `${mousePosition.x / 25}px`,
            bottom: `${mousePosition.y / 25}px`,
            transition: 'all 0.3s ease-out',
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-2xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl animate-float animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Trusted by AI developers worldwide</span>
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight animate-fade-in-up">
            <span className="block">Automated A/B Testing</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient pb-2">
              for Prompt Tuning
            </span>
          </h1>
          
          {/* Subheadline */}
          {/* <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up">
            You don't guess. You test. You grow.
          </p> */}
          
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in-up">
            All in One Platform for Prompt Engineering with built-in A/B Testing
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
            <a
              href="#features"
              className="group relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up">
            {[
              { value: '10K+', label: 'Prompts Optimized' },
              { value: '95%', label: 'Success Rate' },
              { value: '2.5x', label: 'Average Improvement' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
