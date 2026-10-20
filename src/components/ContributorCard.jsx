import { Link } from 'react-router-dom'
import Avatar from './Avatar.jsx'
import { accentFor } from '../lib/contributors.js'

function ContributorCard({ contributor }) {
  const { slug, name, role, skills } = contributor
  const { bg, fg } = accentFor(slug)

  return (
    <article className="group relative flex flex-col gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0" style={{ backgroundColor: bg, color: fg }}>
      <Avatar contributor={contributor} />
      <div>
        <h3 className="text-xl font-bold leading-tight">
          <Link to={`/${slug}`} className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ink">
            {name}
          </Link>
        </h3>
        {role && <p className="mt-1 text-sm opacity-80">{role}</p>}
      </div>
      {skills.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-1.5">
          {skills.slice(0, 3).map((skill) => (
            <li key={skill} className="rounded-full bg-paper/70 px-2.5 py-0.5 text-xs font-medium">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default ContributorCard
