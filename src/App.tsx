import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing'
import ContentLoadingSpinner from './components/ContentLoadingSpinner/ContentLoadingSpinner'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton'
import Title from './components/Metas/Title/Title'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import './styles/index.scss'

function App() {
  return (
    <ErrorBoundary>
      <div className="container-xxl bg-white p-0">
        <ContentLoadingSpinner />
        <ScrollUpButton />
        <BrowserRouter>
          <Title />
          <Routing />
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  )
}

export default App
