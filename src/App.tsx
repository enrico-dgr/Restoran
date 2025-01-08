import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import './styles/index.scss'
import ContentLoadingSpinner from './components/ContentLoadingSpinner/ContentLoadingSpinner'

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <ContentLoadingSpinner />
      <Helmet>
        <title>Restoran - Bootstrap Restaurant Template</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
