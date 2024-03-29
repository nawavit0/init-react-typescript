import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LandingPage } from './pages'

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
