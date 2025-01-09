import { useRoutes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import routes from './routes'
import Service from './pages/Service/Service'
import Booking from './pages/Booking/Booking'
import OurTeam from './pages/OurTeam/OurTeam'
import Testimonial from './pages/Testimonial/Testimonial'

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
  ])

  return elements
}
