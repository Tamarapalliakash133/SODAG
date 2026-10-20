const contributors = [
  { name: 'Omkar', slug: 'omkar' },
]

function Navbar() {
  return (
    <header className="site-header">
      <a className="site-title" href="/">
        SODAG
      </a>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        {contributors.map(({ name, slug }) => (
          <a key={slug} href={`/contributors/${slug}`}>
            {name}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
