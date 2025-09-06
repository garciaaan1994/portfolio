export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-black font-bold text-xl">garciaaan</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-red-500 transition">About</a>
            <a href="#projects" className="text-gray-700 hover:text-red-500 transition">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-red-500 transition">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-red-500 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section - Mood Board Style */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Typography & Calligraphy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-black leading-tight">
                <span className="block">MODERN</span>
                <span className="block text-red-500">CALLIGRAPHY</span>
                <span className="block text-4xl md:text-5xl font-light">VOL.19</span>
              </h1>
              <p className="text-lg text-gray-600">by garciaaan</p>
            </div>
            
            {/* Calligraphy Style Text */}
            <div className="bg-beige-100 p-8 rounded-lg">
              <div className="text-red-500 text-3xl font-cursive transform -rotate-2">
                <span className="block">strawberry</span>
                <span className="block ml-8">blissful</span>
              </div>
            </div>
            
            {/* Personality Keywords */}
            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wider">Keywords</p>
              <div className="flex flex-wrap gap-2">
                {['creative', 'professional', 'modern', 'empathetic', 'emotional', 'thoughtful', 'confident', 'reliable'].map((keyword) => (
                  <span key={keyword} className="text-black text-sm font-medium">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Visual Elements */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="bg-gray-100 h-96 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-gray-500">Portfolio Image</p>
            </div>
            
            {/* Tiger Illustration */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32">
              <div className="w-full h-full bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🐅</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="absolute top-8 right-12 w-4 h-4 bg-red-300 rounded-full"></div>
            <div className="absolute top-12 right-8 w-6 h-6 bg-red-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section - Grid Layout */}
      <section id="about" className="relative z-10 py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - About Text */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl font-bold text-black mb-8">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                私はフルスタックWeb開発者として、React、Next.js、TypeScriptを使用してモダンなウェブアプリケーションを構築しています。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ユーザーエクスペリエンスとパフォーマンスを重視し、クリーンで保守しやすいコードを書くことを心がけています。
              </p>
            </div>
            
            {/* Right Column - Visual Elements */}
            <div className="space-y-6">
              {/* Concert Poster Style Card */}
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">THE MARIAS</h3>
                <h4 className="text-red-500 text-4xl font-bold mb-4">CINEMA</h4>
                <p className="text-sm mb-4">TOUR 2022</p>
                <div className="space-y-2 text-xs">
                  <p>Date: 2024.09.06</p>
                  <p>Location: Tokyo, Japan</p>
                  <p className="text-red-500 font-bold">SOLD OUT</p>
                </div>
              </div>
              
              {/* Small Image Placeholder */}
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-sm">Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Grid Layout */}
      <section id="skills" className="relative z-10 py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'React', 'Next.js', 'TypeScript', 'JavaScript',
              'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'
            ].map((skill) => (
              <div key={skill} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:border-red-500 transition-colors">
                <h3 className="text-black font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Grid Layout */}
      <section id="projects" className="relative z-10 py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-bold text-black mb-4">Seiko Denki Website</h3>
              <p className="text-gray-700 mb-4">
                企業向けのモダンなウェブサイト。Next.jsとTailwind CSSを使用。
              </p>
              <div className="flex space-x-2">
                <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">Next.js</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm">Tailwind</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-bold text-black mb-4">Daily Reports App</h3>
              <p className="text-gray-700 mb-4">
                日報管理アプリケーション。認証機能とデータベース連携。
              </p>
              <div className="flex space-x-2">
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">MongoDB</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">NextAuth</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-bold text-black mb-4">Portfolio Site</h3>
              <p className="text-gray-700 mb-4">
                このポートフォリオサイト。Netlifyでホスティング。
              </p>
              <div className="flex space-x-2">
                <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">Next.js</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">Netlify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-12">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              プロジェクトのご相談やお仕事のご依頼はお気軽にお問い合わせください。
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-red-500 transition">
                Email
              </a>
              <a href="https://github.com/garciaaan1994" className="text-gray-700 hover:text-red-500 transition">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="text-gray-700 hover:text-red-500 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">&copy; 2024 garciaaan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
