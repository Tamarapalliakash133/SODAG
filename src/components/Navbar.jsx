import { Link, NavLink } from 'react-router-dom'
import { CONTRIBUTING_URL } from '../lib/contributors.js'

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-ink/5 ${
    isActive ? 'text-cobalt' : 'text-ink'
  }`

function Navbar() {
  return (
    <header className="border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="text-xl font-extrabold tracking-tight text-ink">
          SODAG
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            People
          </NavLink>
          <a
            href={CONTRIBUTING_URL}
            className="rounded-md bg-ink px-3 py-2 text-sm font-medium text-paper transition-colors hover:bg-cobalt"
          >
            Add your profile
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
