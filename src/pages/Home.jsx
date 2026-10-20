import ContributorCard from '../components/ContributorCard.jsx'
import { CONTRIBUTING_URL, contributors } from '../lib/contributors.js'

const SNIPPET = `{
  "name": "Your Name",
  "role": "Frontend developer",
  "github": "your-github-username",
  "bio": "Two or three sentences about you.",
  "skills": ["React", "Python"]
}`

const STEPS = [
  'Fork the repo and create a branch.',
  'Copy src/contributors/_template.json to src/contributors/your-name.json.',
  'Fill it in with your details.',
  'Open a pull request. Once it merges, your page is live at /your-name.',
]

function Home() {
  return (
    <>
      <section aria-labelledby="people-heading">
        <h1 id="people-heading" className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          The people building SODAG
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/75">
          {contributors.length} {contributors.length === 1 ? 'contributor' : 'contributors'} so far. Open a card to see what they make.
        </p>

        {contributors.length > 0 ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contributors.map((contributor) => (
              <li key={contributor.slug} className="flex *:w-full">
                <ContributorCard contributor={contributor} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 rounded-2xl border border-dashed border-ink/30 p-8">
            No profiles yet. Be the first to add yours.
          </p>
        )}
      </section>

      <section aria-labelledby="join-heading" className="mt-20 grid gap-8 border-t border-ink/10 pt-12 lg:grid-cols-2">
        <div>
          <h2 id="join-heading" className="text-3xl font-bold tracking-tight">
            Add your profile
          </h2>
          <p className="mt-3 text-ink/75">
            One file, one pull request. No routing or component changes needed.
          </p>
          <ol className="mt-6 list-decimal space-y-3 pl-5 marker:font-bold marker:text-cobalt">
            {STEPS.map((step) => (
              <li key={step} className="pl-1">
                {step}
              </li>
            ))}
          </ol>
          <a
            href={CONTRIBUTING_URL}
            className="mt-6 inline-block rounded-md bg-cobalt px-4 py-2.5 font-medium text-white transition-colors hover:bg-ink"
          >
            Read the contributing guide
          </a>
        </div>
        <pre className="overflow-x-auto rounded-2xl bg-ink p-5 text-sm leading-relaxed text-paper" tabIndex={0}>
          <code>{SNIPPET}</code>
        </pre>
      </section>
    </>
  )
}

export default Home
