'use client'

const features = [
  {
    title: 'Prompt Creation & Versioning',
    description: 'Create and manage prompts with an intuitive interface. Build multiple versions of the same prompt, track changes over time, and maintain a complete history of all iterations. Never lose a good prompt version again with our comprehensive version control system.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    highlights: [
      'Intuitive prompt editor',
      'Multiple versions per prompt',
      'Complete change history',
      'Easy version comparison'
    ],
  },
  {
    title: 'AI-Powered Enhancement',
    description: 'Leverage advanced AI to enhance and optimize your prompts automatically. Provide a brief description and let our AI generate improved versions, create variations, and suggest optimizations. Generate multiple prompt versions instantly with AI assistance.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    highlights: [
      'AI-powered prompt enhancement',
      'Automatic version generation',
      'Smart optimization suggestions',
      'One-click AI improvements'
    ],
  },
  {
    title: 'A/B Testing for Prompts',
    description: 'Perform comprehensive split testing to scientifically determine which prompt version performs best. Run simultaneous tests, compare results with detailed analytics, and make data-driven decisions to optimize your AI application performance.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    highlights: [
      'Split testing built-in',
      'Real-time performance metrics',
      'Statistical significance analysis',
      'Winner identification'
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for AI Developers
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your AI prompts in one comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-10 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {feature.description}
              </p>
              
              {/* Highlights */}
              <ul className="space-y-3">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

