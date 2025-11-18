import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-900/90 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-fuchsia-400" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">Nebula Studio</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink>Work</NavLink>
              <NavLink>Services</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
            </nav>

            <div className="hidden md:flex">
              <a href="#" className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-[2px] py-[2px]">
                <span className="rounded-[10px] bg-slate-900/90 px-4 py-2 text-sm font-medium text-white group-hover:bg-transparent transition-colors">Start a project</span>
              </a>
            </div>

            <button className="md:hidden text-slate-300" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4">
              <div className="grid gap-3">
                <NavLink>Work</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Contact</NavLink>
              </div>
              <a href="#" className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-4 py-2 text-sm font-medium text-white">Start a project</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
