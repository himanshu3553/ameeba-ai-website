'use client'

const steps = [
  {
    number: '01',
    title: 'Create Your Prompt',
    description: 'Start by creating your initial prompt or importing an existing one. Our intuitive interface makes prompt creation simple and efficient.',
  },
  {
    number: '02',
    title: 'Generate Versions',
    description: 'Use our AI powered auto-versioning feature to generate multiple versions of your prompt or create versions manually with full control.',
  },
  {
    number: '03',
    title: 'Test & Compare',
    description: 'Run A/B tests to compare different prompt versions. Get detailed analytics and performance metrics to identify the best one.',
  },
  {
    number: '04',
    title: 'Optimize & Deploy',
    description: 'Enhance your winning prompt with AI suggestions, then deploy it to your application with confidence.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and optimize your AI prompts with our streamlined workflow
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-purple-200 to-primary-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center lg:text-left"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

