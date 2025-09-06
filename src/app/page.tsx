export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-50 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex justify-between items-center py-5">
            <div className="text-2xl font-bold tracking-wider text-black">GARCIAAAN</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-sm tracking-wider text-gray-700 hover:text-black transition uppercase">Home</a>
              <a href="#about" className="text-sm tracking-wider text-gray-700 hover:text-black transition uppercase">About</a>
              <a href="#services" className="text-sm tracking-wider text-gray-700 hover:text-black transition uppercase">Services</a>
              <a href="#portfolio" className="text-sm tracking-wider text-gray-700 hover:text-black transition uppercase">Portfolio</a>
              <a href="#contact" className="text-sm tracking-wider text-gray-700 hover:text-black transition uppercase">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - MONO Style */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-thin tracking-widest text-black mb-8 animate-fade-in-up">
            GARCIAAAN
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed tracking-wide opacity-0 animate-fade-in-up-delayed">
            creative web developer focused on modern solutions. crafting digital experiences with intelligence, sensitivity and precision.
          </p>
        </div>
      </section>

      {/* About Section - MONO Style */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="fade-in">
              <h2 className="text-5xl font-thin tracking-widest text-black mb-8">ABOUT</h2>
              <p className="text-base text-gray-600 mb-6 leading-loose">
                We are a creative web development studio that believes in the power of minimalism and meaningful code. Our approach combines intelligence, sensitivity, and precision to create digital experiences that resonate.
              </p>
              <p className="text-base text-gray-600 leading-loose">
                Founded with the vision of crafting timeless web solutions, we work with clients who appreciate thoughtful, purposeful development that tells a story and creates lasting impact.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-lg fade-in">
              <div className="bg-gray-100 h-96 flex items-center justify-center transition-transform duration-500 hover:scale-105">
                <p className="text-gray-500">Developer Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - MONO Style */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-thin tracking-widest text-black text-center mb-20 fade-in">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'WEB DEVELOPMENT',
                description: 'Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.'
              },
              {
                title: 'UI/UX DESIGN',
                description: 'Thoughtful interface design that prioritizes user experience and accessibility in every interaction.'
              },
              {
                title: 'PERFORMANCE',
                description: 'Optimized applications that load fast and perform smoothly across all devices and platforms.'
              }
            ].map((service) => (
              <div key={service.title} className="text-center p-8 bg-white rounded-lg shadow-sm fade-in hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold tracking-wider text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - MONO Style */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-thin tracking-widest text-black text-center mb-20 fade-in">PORTFOLIO</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                title: 'SEIKO DENKI',
                category: 'Corporate Website',
                description: 'Modern corporate website built with Next.js and optimized for performance.'
              },
              {
                title: 'DAILY REPORTS',
                category: 'Web Application',
                description: 'Full-stack application with authentication and database integration.'
              },
              {
                title: 'MONO PORTFOLIO',
                category: 'Personal Portfolio',
                description: 'Minimalist portfolio website showcasing clean design principles.'
              },
              {
                title: 'E-COMMERCE',
                category: 'Online Store',
                description: 'Responsive e-commerce platform with modern payment integration.'
              }
            ].map((project) => (
              <div key={project.title} className="group fade-in">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="bg-gray-100 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <p className="text-gray-500">{project.title}</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm tracking-wider text-gray-500 mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold tracking-wider text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - MONO Style */}
      <section id="contact" className="py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center fade-in">
          <h2 className="text-5xl font-thin tracking-widest text-white mb-20">CONTACT</h2>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-sm tracking-wider text-gray-400 mb-4 uppercase">Email</h3>
              <p className="text-lg text-white">hello@garciaaan.com</p>
            </div>
            <div>
              <h3 className="text-sm tracking-wider text-gray-400 mb-4 uppercase">Phone</h3>
              <p className="text-lg text-white">+81 80 1234 5678</p>
            </div>
            <div>
              <h3 className="text-sm tracking-wider text-gray-400 mb-4 uppercase">Location</h3>
              <p className="text-lg text-white">Tokyo, Japan</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="mailto:hello@garciaaan.com" className="text-white hover:text-gray-300 transition text-sm tracking-wider uppercase">
              Email
            </a>
            <a href="https://github.com/garciaaan1994" className="text-white hover:text-gray-300 transition text-sm tracking-wider uppercase">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-white hover:text-gray-300 transition text-sm tracking-wider uppercase">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm tracking-wider">&copy; 2024 GARCIAAAN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
