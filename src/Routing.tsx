import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import routes from './routes'

// Lazy load all pages
const Home = React.lazy(() => import('./pages/Home/Home'))
const Menu = React.lazy(() => import('./pages/Menu/Menu'))
const About = React.lazy(() => import('./pages/About/About'))
const Contact = React.lazy(() => import('./pages/Contact/Contact'))
const Service = React.lazy(() => import('./pages/Service/Service'))
const Booking = React.lazy(() => import('./pages/Booking/Booking'))
const OurTeam = React.lazy(() => import('./pages/OurTeam/OurTeam'))
const Testimonial = React.lazy(() => import('./pages/Testimonial/Testimonial'))
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'))

export default function Routing() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Navigate to={routes.home.absolutePath} />,
    },
    {
      path: routes.home.name,
      element: <Home />,
    },
    {
      path: routes.about.name,
      element: <About />,
    },
    {
      path: routes.service.name,
      element: <Service />,
    },
    {
      path: routes.menu.name,
      element: <Menu />,
    },
    {
      path: routes.booking.name,
      element: <Booking />,
    },
    {
      path: routes.team.name,
      element: <OurTeam />,
    },
    {
      path: routes.testimonial.name,
      element: <Testimonial />,
    },
    {
      path: routes.contact.name,
      element: <Contact />,
    },
    {
      path: routes.notFound.absolutePath,
      element: <NotFound />,
    },
  ])

  return elements
}
