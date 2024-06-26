import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Navbar from './Parts/Navbar.jsx'
import Footer from './Parts/Footer.jsx'
import NotFoundPage from "./Parts/NotFoundPage.jsx"

// Parts
import CourseContainer from './Courses/CoursesContainer.jsx'
import ProjectsContainer from './Projects/ProjectsContainer.jsx';
import EducationsContainer from './Education/EducationsContainer.jsx'

import './index.css'
import Particles from 'particlesjs'

// Load particles for background
window.onload = () => {
  Particles.init({
    selector: '.background',
    color: "#222222",
    connectParticles: "true",
    maxParticles: "60",
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          connectParticles: false
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          connectParticles: false
        }
      }, {
        breakpoint: 320,
        options: {
          maxParticles: 0
        }
      }
    ]
  });
}

const router = createBrowserRouter([
  {
    path: '/Cv_react_tailwindcss/',
    element: <App/>,
    children: [
      {
        path: '/Cv_react_tailwindcss/',
        element: <>
          <CourseContainer />
        </>,
      }, {
        path: '/Cv_react_tailwindcss/projects',
        element: <>
          <ProjectsContainer />
        </>,
      },  {
        path: '/Cv_react_tailwindcss/education',
        element: <>
          <EducationsContainer />
        </>,
      } 
    ],
  }, {
    path: '*',
    element: <>
      <Navbar />
      <NotFoundPage />
      <Footer />
    </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> 
    </RouterProvider>
  </React.StrictMode>,
)
