import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link className="navbar-brand" to="/">
        <h1 className="">
          <FontAwesomeIcon icon={faUtensils} className="me-3" />
          Restoran
        </h1>
      </Link>
    </nav>
  )
}
