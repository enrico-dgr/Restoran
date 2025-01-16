import Header from '../../components/Header/Header'
import CardsService from '../../components/Cards/CardsService/CardsService'
import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'

import './Home.scss'
import AboutUs from '../../components/AboutUs/AboutUs'
import FoodMenu from '../../components/FoodMenu/FoodMenu'
import Reservation from '../../components/Reservation/Reservation'
import CardsTeam from '../../components/Cards/CardsTeam/CardsTeam'
import Testimonials from '../../components/Testimonials/Testimonials'
import Footer from '../../components/Footer/Footer'

const defaultDescription =
  'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'

export default function Home() {
  return (
    <>
      <Header pagination={false} />
      <CardsService
        cards={[
          {
            description: defaultDescription,
            icon: faUserTie,
            title: 'Master Chefs',
          },
          {
            description: defaultDescription,
            icon: faUtensils,
            title: 'Quality Food',
          },
          {
            description: defaultDescription,
            icon: faCartPlus,
            title: 'Online Order',
          },
          {
            description: defaultDescription,
            icon: faHeadset,
            title: '24/7 Service',
          },
        ]}
      />
      <AboutUs />
      <FoodMenu numberOfElements={8} />
      <Reservation />
      <CardsTeam
        cards={[
          {
            name: 'John Doe',
            description: 'Master Chef',
            img: '../img/team-1.png',
            fb: 'https://facebook.com',
            x: 'https://twitter.com',
            ig: 'https://instagram.com',
          },
          {
            name: 'Dohn Joe',
            description: 'Master Chef',
            img: '../img/team-2.png',
            fb: 'https://facebook.com',
            x: 'https://twitter.com',
            ig: 'https://instagram.com',
          },
          {
            name: 'John Snow',
            description: 'Master Chef',
            img: '../img/team-3.png',
            fb: 'https://facebook.com',
            x: 'https://twitter.com',
            ig: 'https://instagram.com',
          },
          {
            name: 'Son Goku',
            description: 'Master Chef',
            img: '../img/team-4.png',
            fb: 'https://facebook.com',
            x: 'https://twitter.com',
            ig: 'https://instagram.com',
          },
        ]}
      />
      <Testimonials />
      <Footer />
    </>
  )
}
