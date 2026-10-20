import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { REPO_URL } from '../lib/contributors.js'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
        <Outlet />
      </main>
      <footer className="border-t border-ink/10 px-5 py-6 text-sm text-ink/70 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2">
          <span>SODAG, built by its contributors.</span>
          <a href={REPO_URL} className="underline underline-offset-4 hover:text-cobalt">
            Source on GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
