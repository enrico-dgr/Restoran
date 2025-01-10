import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import './AboutUs.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutUs() {
  return (
    <div className="container section-about-us">
      <div className="photo-group">
        <img src="../img/restaurant-1.png" alt="" />
        <img src="../img/restaurant-2.png" alt="" />
        <img src="../img/food-1.png" alt="" />
        <img src="../img/food-2.png" alt="" />
      </div>
      <div className="description">
        <h5 className="section-title text-primary">About Us</h5>
        <h1 className="mb-4">
          Welcome to{' '}
          <FontAwesomeIcon icon={faUtensils} className="text-primary mr-2" />
          Restoran
        </h1>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="numbers mb-4">
          <div className="number">
            <h1
              className="text-5 text-primary mb-0"
              data-toggle="counter-up"
            >
              15
            </h1>
            <div className="pl-4">
              <p>Years of</p>
              <h6 className="text-uppercase mb-0">Experience</h6>
            </div>
          </div>
          <div className="number">
            <h1
              className="text-5 text-primary mb-0"
              data-toggle="counter-up"
            >
              50
            </h1>
            <div className="pl-4">
              <p className="mb-0">Popular</p>
              <h6 className="text-uppercase mb-0">Master Chefs</h6>
            </div>
          </div>
        </div>
        <a className="btn btn-primary py-3 px-5 mt-2" href="">
          Read More
        </a>
      </div>
    </div>
  )
}
