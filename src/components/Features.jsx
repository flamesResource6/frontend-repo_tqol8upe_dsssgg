import { motion } from 'framer-motion'
import { Sparkles, Zap, Atom, Stars } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Brand Systems',
    desc: 'Cohesive identities with scalable design tokens and typographic rhythm.',
    gradient: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Web Experiences',
    desc: 'High-performance websites with nuanced motion and delightful micro-interactions.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Atom,
    title: 'Product Design',
    desc: 'Outcome-driven workflows from discovery to validation and launch.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Stars,
    title: '3D & Motion',
    desc: 'Spline, WebGL and video animations that bring your story to life.',
    gradient: 'from-amber-400 to-pink-500',
  },
]

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto h-full max-w-7xl px-6">
          <div className="h-full rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_60%)]" />
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Capabilities</h2>
            <p className="mt-3 max-w-xl text-slate-300">A multidisciplinary team blending brand strategy, product design and engineering to deliver standout results.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">Our approach</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${f.gradient} opacity-30 blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
                <div className="mt-6 inline-flex rounded-lg bg-gradient-to-r from-white/10 to-transparent p-[1px]">
                  <span className="rounded-[7px] px-3 py-1 text-xs text-slate-200 bg-slate-900/60">Explore</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
