import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Aurora OS',
    tag: 'Product Launch',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Atlas Labs',
    tag: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Neon Meta',
    tag: 'Campaign',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Selected work</h2>
          <p className="mt-3 max-w-xl text-slate-300">A glimpse into partnerships crafted for impact.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * i, duration: 0.6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-xl bg-slate-950/70 backdrop-blur border border-white/10 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-slate-300">{p.tag}</div>
                  <div className="mt-1 text-white text-lg font-medium">{p.title}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
