/**
 * - name: used in the url
 * - publicName: used as text in links
 * - absolutePath: used as href in links
 * - publicPath: used as text for paths ( e.g. breadcrumb )
 */
const routes = {
  home: {
    name: 'index',
    publicName: 'Home',
    headerTitle: 'Home',
    absolutePath: '/index',
    publicPath: '/Home',
  },
  about: {
    name: 'about',
    publicName: 'About',
    headerTitle: 'About Us',
    absolutePath: '/about',
    publicPath: '/Home/Pages/About',
  },
  service: {
    name: 'service',
    publicName: 'Service',
    headerTitle: 'Service',
    absolutePath: '/service',
    publicPath: '/Home/Pages/Service',
  },
  menu: {
    name: 'menu',
    publicName: 'Menu',
    headerTitle: 'Menu',
    absolutePath: '/menu',
    publicPath: '/Home/Pages/Menu',
  },
  booking: {
    name: 'booking',
    publicName: 'Booking',
    headerTitle: 'Booking',
    absolutePath: '/booking',
    publicPath: '/Home/Pages/Booking',
  },
  team: {
    name: 'team',
    publicName: 'Our Team',
    headerTitle: 'Our Team',
    absolutePath: '/team',
    publicPath: '/Home/Pages/Our Team',
  },
  testimonial: {
    name: 'testimonial',
    publicName: 'Testimonial',
    headerTitle: 'Testimonial',
    absolutePath: '/testimonial',
    publicPath: '/Home/Pages/Testimonial',
  },
  contact: {
    name: 'contact',
    publicName: 'Contact',
    headerTitle: 'Contact',
    absolutePath: '/contact',
    publicPath: '/Home/Pages/Contact',
  },
}

export default routes
