import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PromptVersionControlPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-purple-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
              <span className="text-sm font-semibold text-purple-600">Feature</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Prompt Version Control
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Track every change to your prompts with powerful version control
            </p>
          </div>

          {/* Feature Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Never Lose a Good Prompt Again</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our version control system keeps track of every iteration of your prompts. Compare versions, 
                rollback changes, and maintain a complete history of your prompt development process.
              </p>
              <ul className="space-y-4">
                {[
                  'Automatic version tracking for every change',
                  'Side-by-side version comparison',
                  'One-click rollback to previous versions',
                  'Detailed change history with timestamps',
                  'Branching and merging capabilities',
                  'Collaborative editing with conflict resolution'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Version History</h3>
                <div className="space-y-3">
                  {[
                    { version: 'v3.0', date: '2 hours ago', status: 'current' },
                    { version: 'v2.5', date: '1 day ago', status: 'previous' },
                    { version: 'v2.0', date: '3 days ago', status: 'archived' },
                  ].map((ver, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">{ver.version}</div>
                        <div className="text-sm text-gray-600">{ver.date}</div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        ver.status === 'current' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {ver.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Every Prompt Evolution</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Maintain complete control over your prompt development process
            </p>
            <a
              href="/"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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

