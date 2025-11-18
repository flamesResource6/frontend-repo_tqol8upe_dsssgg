import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(600px_400px_at_20%_10%,rgba(217,70,239,0.15),transparent),radial-gradient(600px_400px_at_80%_0%,rgba(59,130,246,0.12),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <footer className="relative border-t border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-slate-400 text-sm">© 2025 Nebula Studio. All rights reserved.</p>
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <a href="#">Privacy</a>
                <span className="opacity-30">•</span>
                <a href="#">Terms</a>
                <span className="opacity-30">•</span>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
