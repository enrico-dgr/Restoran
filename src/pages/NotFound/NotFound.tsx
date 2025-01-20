import { Link } from 'react-router-dom'
import './NotFound.scss'
import routes from '../../routes'

const NotFound = () => {
  return (
    <div className="container not-found py-5">
      <div className="p-4 bg-light">
        <h2 className="text-primary mb-4">404 - Page Not Found</h2>
        <p className="mb-3">The page you're looking for doesn't exist.</p>
        <Link to={routes.home.absolutePath} className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
