import React, { lazy, Suspense } from 'react'
import Loading from "./components/Loading"
import ReactDOM from 'react-dom/client'

import '../styles/index.css'

const RootApp = () => {
  const App = lazy(() => import('./App'))

  return <>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
)
