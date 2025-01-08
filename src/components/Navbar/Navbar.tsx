import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'

export default function Navbar() {
  return (
    <nav className="navbar bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link className="navbar-brand" to="/">
        <h1 className="text-primary m-0">
          <FontAwesomeIcon icon={faUtensils} className="mr-3" />
          Restoran
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-links navbar-nav ms-auto py-0 pe-4">
          <a href="index.html" className="navbar-item navbar-link active">
            Home
          </a>
          <a href="about.html" className="navbar-item navbar-link">
            About
          </a>
          <a href="service.html" className="navbar-item navbar-link">
            Service
          </a>
          <a href="menu.html" className="navbar-item navbar-link">
            Menu
          </a>
          <div className="navbar-item dropdown">
            <a
              href="#"
              className="navbar-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a href="booking.html" className="dropdown-item">
                Booking
              </a>
              <a href="team.html" className="dropdown-item">
                Our Team
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
            </div>
          </div>
          <a href="contact.html" className="navbar-item navbar-link">
            Contact
          </a>
        </div>
        <a href="" className="btn btn-primary py-2 px-4">
          Book A Table
        </a>
      </div>
    </nav>
  )
}
