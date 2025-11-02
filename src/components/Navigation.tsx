import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navigation() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs leading-tight">MOSF</span>
              </div>
              <Link
                to="/"
                className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Muslim Open Source Foundation
              </Link>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base ml-14">
              Empowering Muslims through open-source education and ethical technology
            </p>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ml-4"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
        <nav className="ml-14 flex flex-wrap items-center gap-4">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/")
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Home
          </Link>
          <Link
            to="/evaluations"
            className={`text-sm font-medium transition-colors ${
              isActive("/evaluations") || location.pathname.startsWith("/evaluations/")
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Evaluations
          </Link>
          <Link
            to="/frameworks/repository-evaluation"
            className={`text-sm font-medium transition-colors ${
              isActive("/frameworks/repository-evaluation")
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Framework
          </Link>
          <Link
            to="/roadmap"
            className={`text-sm font-medium transition-colors ${
              isActive("/roadmap")
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Roadmap
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium transition-colors ${
              isActive("/projects")
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

