import ContributorCard from '../components/ContributorCard.jsx'

const contributors = [
  { name: 'Omkar', slug: 'omkar' },
]

function Home() {
  return (
    <main className="page-content">
      <h1>Contributors</h1>
      <div className="contributor-list">
        {contributors.map((contributor) => (
          <ContributorCard key={contributor.slug} {...contributor} />
        ))}
      </div>
    </main>
  )
}

export default Home
