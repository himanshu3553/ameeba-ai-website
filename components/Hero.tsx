'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-purple-900 to-primary-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smarter A/B Testing for Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-purple-300 mt-2 leading-tight py-1">
              Prompt Engineering
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            All in One Platform for Prompt Engineering with built-in A/B Testing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#cta"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
            >
              Get Started Free
            </a>
            {/* <a
              href="#features"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 text-lg"
            >
              Learn More
            </a> */}
          </div>

          {/* <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm">Core Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">A/B</div>
              <div className="text-sm">Testing Built-in</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">AI</div>
              <div className="text-sm">Powered Enhancement</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

