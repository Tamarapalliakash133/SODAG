import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Omkar from './pages/contributors/omkar.jsx'

const routes = {
  '/': <Home />,
  '/contributors/omkar': <Omkar />,
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  return (
    <>
      <Navbar />
      {routes[path] ?? <NotFound />}
    </>
  )
}

export default App
