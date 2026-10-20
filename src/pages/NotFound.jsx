import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h1 className="text-4xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-ink/75">
        There is no profile or page at this address. Check the spelling, or browse everyone from the home page.
      </p>
      <Link to="/" className="mt-6 inline-block rounded-md bg-ink px-4 py-2.5 font-medium text-paper hover:bg-cobalt">
        See all contributors
      </Link>
    </section>
  )
}

export default NotFound
