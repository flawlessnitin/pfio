export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              N
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Nitin
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A passionate developer creating amazing digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View My Work
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "Tailwind CSS",
            "MongoDB",
            "PostgreSQL"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Some of my recent work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Project {project}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of this amazing project and the technologies used to build it.
                </p>
                <div className="flex space-x-4">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    View Demo
                  </button>
                  <button className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-20">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Nitin. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}