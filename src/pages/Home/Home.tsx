import Header from '../../components/Header/Header'
import CardsProsContainer from '../../components/Cards/CardsProsGroup/CardsProsGroup'
import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'

import './Home.scss'
import AboutUs from '../../components/AboutUs/AboutUs'

const defaultDescription =
  'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'

export default function Home() {
  return (
    <>
      <Header pagination={false} />
      <div className="container-xxl py-5">
        <CardsProsContainer
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
      </div>
      <div className="container-xxl py-5">
        <AboutUs />
      </div>
    </>
  )
}
