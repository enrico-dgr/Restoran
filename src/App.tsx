import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ContentLoadingSpinner from './components/ContentLoadingSpinner/ContentLoadingSpinner'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton'
import Title from './components/Metas/Title/Title'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import './styles/index.scss'

// Lazy load the Routing component
const Routing = React.lazy(() => import('./Routing'))

function App() {
  return (
    <ErrorBoundary>
      <div className="container-xxl bg-white p-0">
        <ContentLoadingSpinner />
        <ScrollUpButton />
        <BrowserRouter>
          <Title />
          <Suspense fallback={<ContentLoadingSpinner />}>
            <Routing />
          </Suspense>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  )
}

export default App
