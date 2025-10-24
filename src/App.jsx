import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutMePage from './pages/AboutMePage'
import ContactPage from './pages/ContactMePage'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        />
        <Route
          path="/services"
          element={<ServicePage/>}
        />
        <Route
          path="/projects"
          element={<ProjectsPage/>}
        />
        <Route
          path="/aboutme"
          element={<AboutMePage/>}
        />
        <Route
          path="/contact"
          element={<ContactPage/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App