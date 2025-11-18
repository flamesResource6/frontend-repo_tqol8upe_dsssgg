import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  'brand identities',
  'web experiences',
  'product launches',
  'creative strategy',
  'immersive 3D',
]

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            Open for new projects — Q4 2025
          </motion.div>

          <div className="mt-6">
            <h1 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
              We design ultra-modern
              <br />
              <DynamicText words={words} />
            </h1>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-6 max-w-2xl text-lg text-slate-300">
            A future-forward design agency crafting premium brands and interfaces blending art, utility, and motion. We help you stand out with aesthetics that convert.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 p-[2px]">
              <span className="rounded-[10px] bg-slate-950/80 px-5 py-3 text-sm font-medium text-white transition-colors group-hover:bg-transparent">Start a project</span>
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10">
              View work
            </a>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {['Nike', 'Notion', 'Airbnb', 'Figma'].map((brand, i) => (
              <motion.div key={brand} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i, duration: 0.6 }} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-slate-300 backdrop-blur">
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-300 backdrop-blur">
        Drag to explore — interactive 3D
      </motion.div>
    </section>
  )
}

function DynamicText({ words }) {
  return (
    <span className="inline-flex min-h-[1.2em] flex-col md:inline-block">
      <AnimatePresence mode="wait">
        {words.map((w, i) => (
          <motion.span
            key={w}
            className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30, position: 'absolute' }}
            animate={{ opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : -20, position: i === 0 ? 'static' : 'absolute' }}
            exit={{ opacity: 0, y: -30, position: 'absolute' }}
            transition={{ duration: 0.8 }}
          >
            {w}
          </motion.span>
        ))}
      </AnimatePresence>
      <WordRotator words={words} />
    </span>
  )
}

function WordRotator({ words }) {
  const [index, setIndex] = useState(0)

  // simple interval rotation
  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 1800)
    return () => clearInterval(id)
  }, [words.length])

  return (
    <span className="sr-only">{words[index]}</span>
  )
}
