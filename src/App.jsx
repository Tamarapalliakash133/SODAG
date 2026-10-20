import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'

// Old links used /contributors/<slug>; keep them working.
function LegacyProfileRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/${slug}`} replace />
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contributors/:slug" element={<LegacyProfileRedirect />} />
        <Route path=":slug" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
