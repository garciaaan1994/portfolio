export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">garciaaan</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-purple-300 transition">About</a>
            <a href="#projects" className="text-white hover:text-purple-300 transition">Projects</a>
            <a href="#skills" className="text-white hover:text-purple-300 transition">Skills</a>
            <a href="#contact" className="text-white hover:text-purple-300 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Web Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            モダンなウェブアプリケーションを作成しています
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition">
              プロジェクトを見る
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition">
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              私はフルスタックWeb開発者として、React、Next.js、TypeScriptを使用してモダンなウェブアプリケーションを構築しています。
            </p>
            <p className="text-lg text-gray-300">
              ユーザーエクスペリエンスとパフォーマンスを重視し、クリーンで保守しやすいコードを書くことを心がけています。
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              'React', 'Next.js', 'TypeScript', 'JavaScript',
              'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'
            ].map((skill) => (
              <div key={skill} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-white font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Seiko Denki Website</h3>
              <p className="text-gray-300 mb-4">
                企業向けのモダンなウェブサイト。Next.jsとTailwind CSSを使用。
              </p>
              <div className="flex space-x-2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">Next.js</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Tailwind</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Daily Reports App</h3>
              <p className="text-gray-300 mb-4">
                日報管理アプリケーション。認証機能とデータベース連携。
              </p>
              <div className="flex space-x-2">
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">MongoDB</span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">NextAuth</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Portfolio Site</h3>
              <p className="text-gray-300 mb-4">
                このポートフォリオサイト。Netlifyでホスティング。
              </p>
              <div className="flex space-x-2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">Next.js</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">Netlify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">
              プロジェクトのご相談やお仕事のご依頼はお気軽にお問い合わせください。
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:your.email@example.com" className="text-white hover:text-purple-300 transition">
                Email
              </a>
              <a href="https://github.com/garciaaan" className="text-white hover:text-purple-300 transition">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="text-white hover:text-purple-300 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2024 garciaaan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
