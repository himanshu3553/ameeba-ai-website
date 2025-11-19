import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PromptCreationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-600">Feature</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Prompt Creation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create and manage AI prompts with an intuitive interface designed for developers
            </p>
          </div>

          {/* Feature Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Build Better Prompts, Faster</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our prompt creation interface is designed specifically for AI developers who need to build, 
                test, and iterate on prompts quickly. With intelligent suggestions and real-time validation, 
                you can create high-quality prompts in minutes.
              </p>
              <ul className="space-y-4">
                {[
                  'Intuitive prompt editor with syntax highlighting',
                  'Template library for common use cases',
                  'Variable insertion and dynamic content',
                  'Real-time character and token counting',
                  'Prompt validation and error detection',
                  'Import/export capabilities'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Prompt Editor</h3>
                  <span className="text-sm text-gray-500">Example</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-800 mb-4">
                  <div className="text-blue-600">System:</div>
                  <div className="ml-4 mb-2">You are a helpful AI assistant...</div>
                  <div className="text-purple-600">User:</div>
                  <div className="ml-4">{'{{user_input}}'}</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tokens: 156</span>
                  <span className="text-green-600 font-medium">Valid ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Better Prompts?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start building and optimizing your AI prompts today
            </p>
            <a
              href="/"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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

