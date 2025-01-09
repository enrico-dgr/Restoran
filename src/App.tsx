import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './styles/index.scss'
import ContentLoadingSpinner from './components/ContentLoadingSpinner/ContentLoadingSpinner'

import Routing from './Routing'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton'

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <ContentLoadingSpinner />
      <ScrollUpButton />
      <Helmet>
        <title>Restoran - Bootstrap Restaurant Template</title>
      </Helmet>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  )
}

export default App
