import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PromptAIEnhancementPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-pink-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full mb-6">
              <span className="text-sm font-semibold text-pink-600">Feature</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Prompt AI Enhancement
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let AI optimize your prompts automatically for better performance
            </p>
          </div>

          {/* Feature Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">AI-Powered Optimization</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leverage advanced AI to enhance and optimize your prompts automatically. Our AI analyzes 
                your prompts and suggests improvements, generates variations, and helps you find the perfect 
                phrasing for maximum effectiveness.
              </p>
              <ul className="space-y-4">
                {[
                  'Automatic prompt improvement suggestions',
                  'Generate multiple prompt variations instantly',
                  'Smart optimization based on best practices',
                  'Context-aware enhancement recommendations',
                  'One-click prompt enhancement',
                  'Learning from successful prompt patterns'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-pink-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border-2 border-pink-200">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">AI Suggestions</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Original</div>
                    <div className="text-sm text-gray-700">Help me with this task</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-lg">
                    <div className="text-xs text-pink-600 font-medium mb-1">AI Enhanced</div>
                    <div className="text-sm text-gray-900 font-medium">
                      Please assist me in completing this task by providing detailed, step-by-step guidance...
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Quality Score</span>
                  <span className="text-green-600 font-bold">+45%</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Prompts with AI</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Let AI help you create better prompts automatically
            </p>
            <a
              href="https://app.ameeba.io"
              className="inline-block px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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

