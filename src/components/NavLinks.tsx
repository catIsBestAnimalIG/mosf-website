import { Link, useLocation } from "react-router-dom";

export default function NavLinks() {
  const location = useLocation();
  const isActive = (path: string) => 
    location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <nav className="ml-14 flex flex-wrap items-center gap-4 mb-4">
      <Link
        to="/"
        className={`text-sm font-medium transition-colors ${
          isActive("/") && location.pathname === "/"
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
      <Link
        to="/articles-of-incorporation"
        className={`text-sm font-medium transition-colors ${
          isActive("/articles-of-incorporation") || location.pathname.startsWith("/articles-of-incorporation")
            ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
      >
        Articles of Incorporation
      </Link>
    </nav>
  );
}

