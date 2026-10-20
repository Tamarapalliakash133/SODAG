// Every src/contributors/<slug>.json file becomes a profile at /<slug>.
// Files that start with "_" (like _template.json) are ignored.
const modules = import.meta.glob(
  ['../contributors/*.json', '!../contributors/_*.json'],
  { eager: true, import: 'default' },
)

// Only http(s) links are rendered, so a profile can never inject a javascript: URL.
export function safeUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null
  } catch {
    return null
  }
}

const asArray = (value) => (Array.isArray(value) ? value : [])

function normalize(path, data) {
  const slug = path.split('/').pop().replace(/\.json$/, '').toLowerCase()
  return {
    slug,
    name: String(data.name || slug),
    role: data.role ? String(data.role) : '',
    location: data.location ? String(data.location) : '',
    github: data.github ? String(data.github).replace(/^@/, '') : '',
    bio: data.bio ? String(data.bio) : '',
    skills: asArray(data.skills).map(String),
    projects: asArray(data.projects)
      .map((p) => ({
        name: String(p?.name || ''),
        description: p?.description ? String(p.description) : '',
        url: safeUrl(p?.url),
      }))
      .filter((p) => p.name),
    links: asArray(data.links)
      .map((l) => ({ label: String(l?.label || ''), url: safeUrl(l?.url) }))
      .filter((l) => l.label && l.url),
  }
}

export const contributors = Object.entries(modules)
  .map(([path, data]) => normalize(path, data))
  .sort((a, b) => a.name.localeCompare(b.name))

export function getContributor(slug = '') {
  return contributors.find((c) => c.slug === slug.toLowerCase())
}

const ACCENTS = [
  { bg: '#dfe6ff', fg: '#1d33c7' },
  { bg: '#d6f0e3', fg: '#17613f' },
  { bg: '#ffe9a8', fg: '#6f4e00' },
  { bg: '#ffd9d2', fg: '#9c2f1d' },
  { bg: '#e6dcff', fg: '#4a2aa8' },
]

// Same person, same colour, every time.
export function accentFor(slug) {
  let hash = 0
  for (const char of slug) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  return ACCENTS[hash % ACCENTS.length]
}

export const REPO_URL = 'https://github.com/omkardalu/SODAG'
export const CONTRIBUTING_URL = `${REPO_URL}/blob/main/CONTRIBUTING.md`
