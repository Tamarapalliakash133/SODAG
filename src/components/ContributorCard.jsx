function ContributorCard({ name, slug }) {
  return (
    <article className="contributor-card">
      <h2>{name}</h2>
      <a href={`/contributors/${slug}`}>View profile</a>
    </article>
  )
}

export default ContributorCard
