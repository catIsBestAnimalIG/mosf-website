import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a preference stored
    const stored = localStorage.getItem('darkMode')
    return stored ? JSON.parse(stored) : false
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm leading-tight">MOSF</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Muslim Open Source Foundation
                </h1>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl ml-16">
                Empowering Muslims through open-source education and ethical technology
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 ml-16 mt-2 italic">
                (In Formation)
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Mission Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-blue-200 dark:border-blue-800 pb-2">
            Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Empower the global Muslim community to gain Islamic and software engineering knowledge freely through open-source collaboration, education, and innovation.
          </p>
        </section>

        {/* Vision Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-blue-200 dark:border-blue-800 pb-2">
            Vision
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A world where Muslims lead in ethical technology and open knowledge — advancing society through faith-aligned, transparent, and accessible digital solutions.
          </p>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-blue-200 dark:border-blue-800 pb-2">
            About
          </h2>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              The Muslim Open Source Foundation (MOSF) is a nonprofit organization currently in formation in Washington State. Our purpose is to promote education, free and open-source software development, and Islamic ethical values in technology.
            </p>
            <p>
              We believe that knowledge should be freely accessible, and technology should align with ethical principles that benefit society. Through open-source collaboration, we aim to create tools and resources that serve the Muslim community and beyond.
            </p>
            <p>
              Our focus areas include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>Free and open-source software for Islamic learning and ethical technology</li>
              <li>Educational initiatives that combine modern engineering skills with Islamic principles</li>
              <li>Grants and mentorship for Muslim developers and educators</li>
            </ul>
          </div>
        </section>

        {/* Status Notice */}
        <section className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-500 p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                The Muslim Open Source Foundation is currently in formation in Washington State and preparing its 501(c)(3) application. Donations are not being accepted yet.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-blue-200 dark:border-blue-800 pb-2">
            Contact
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            For inquiries, please reach out to us at:{' '}
            <a 
              href="mailto:contact@muslimopensource.org" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-medium transition-colors"
            >
              contact@muslimopensource.org
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2025 Muslim Open Source Foundation — All rights reserved.
          </p>
          <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-2">
            This organization is currently in formation.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

