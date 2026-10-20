import { Link, useParams } from 'react-router-dom'
import Avatar from '../components/Avatar.jsx'
import NotFound from './NotFound.jsx'
import { accentFor, getContributor } from '../lib/contributors.js'

function Profile() {
  const { slug } = useParams()
  const contributor = getContributor(slug)

  if (!contributor) return <NotFound />

  const { name, role, location, bio, skills, projects, links } = contributor
  const { bg, fg } = accentFor(contributor.slug)

  return (
    <article>
      <Link to="/" className="text-sm underline underline-offset-4 hover:text-cobalt">
        All contributors
      </Link>

      <header className="mt-6 flex flex-col gap-6 rounded-3xl p-6 sm:flex-row sm:items-center sm:p-10" style={{ backgroundColor: bg, color: fg }}>
        <Avatar contributor={contributor} size="lg" />
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{name}</h1>
          {(role || location) && (
            <p className="mt-2 opacity-80">{[role, location].filter(Boolean).join(', ')}</p>
          )}
        </div>
      </header>

      {bio && <p className="mt-8 max-w-2xl text-lg leading-relaxed">{bio}</p>}

      {skills.length > 0 && (
        <section aria-labelledby="skills-heading" className="mt-10">
          <h2 id="skills-heading" className="text-xl font-bold">Skills</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="rounded-full border border-ink/20 px-3 py-1 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {projects.length > 0 && (
        <section aria-labelledby="projects-heading" className="mt-10">
          <h2 id="projects-heading" className="text-xl font-bold">Projects</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {projects.map(({ name: projectName, description, url }) => (
              <li key={projectName} className="rounded-xl border border-ink/15 bg-white p-4">
                <h3 className="font-semibold">
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-cobalt underline underline-offset-4">
                      {projectName}
                    </a>
                  ) : (
                    projectName
                  )}
                </h3>
                {description && <p className="mt-1 text-sm text-ink/75">{description}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {links.length > 0 && (
        <section aria-labelledby="links-heading" className="mt-10">
          <h2 id="links-heading" className="text-xl font-bold">Find me</h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {links.map(({ label, url }) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-cobalt underline underline-offset-4">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}

export default Profile
