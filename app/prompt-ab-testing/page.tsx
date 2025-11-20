import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PromptABTestingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-indigo-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
              <span className="text-sm font-semibold text-indigo-600">Feature</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Prompt A/B Testing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Scientifically determine which prompt version performs best
            </p>
          </div>

          {/* Feature Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Make Data-Driven Decisions</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Run comprehensive A/B tests to compare different prompt versions. Our testing framework 
                provides statistical analysis and clear insights to help you choose the best performing prompts.
              </p>
              <ul className="space-y-4">
                {[
                  'Split testing with configurable traffic allocation',
                  'Real-time performance metrics and analytics',
                  'Statistical significance calculations',
                  'Automatic winner identification',
                  'Multi-variant testing support',
                  'Detailed comparison reports'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border-2 border-indigo-200">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Test Results</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">Version A</span>
                      <span className="text-green-700 font-bold text-sm">Winner</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">87.5%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">Version B</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">76.3%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center text-sm text-gray-600 mt-4">
                    95% confidence • 1,000 samples
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Testing Your Prompts</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Find the best performing prompts with scientific A/B testing
            </p>
            <a
              href="https://app.ameeba.io"
              className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

