'use client'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-gray-900 transition-colors">Prompt Creation</a></li>
              <li><a href="#features" className="hover:text-gray-900 transition-colors">A/B Testing</a></li>
              <li><a href="#features" className="hover:text-gray-900 transition-colors">AI Enhancement</a></li>
              <li><a href="#features" className="hover:text-gray-900 transition-colors">Version Control</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Cookies Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ameeba AI</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Smarter A/B Testing and Prompt<br />
              Optimization for AI Growth
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© 2025 Ameeba AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

