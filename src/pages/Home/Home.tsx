import Header from '../../components/Header/Header'
import CardsProsContainer from './CardsProsContainer'

import './Home.scss'

export default function Home() {
  return (
    <>
      <Header pagination={false} />
      <div className="container-xxl py-5">
        <CardsProsContainer />
      </div>
      <div className="container-xxl py-5"></div>
    </>
  )
}
