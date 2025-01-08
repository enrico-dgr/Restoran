import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'
import { useMemo, useState, useCallback } from 'react'
import routes from '../../routes'
import LinkOrGroup, { NavbarLink } from './LinkOrGroup'

export default function Navbar() {
  const [showLinksContainer, setShowLinksContainer] = useState(false)
  const location = useLocation();

  const links = useMemo<NavbarLink[]>(
    () => [
      {
        group: false,
        name: 'home',
      },
      {
        group: false,
        name: 'about',
      },
      {
        group: false,
        name: 'service',
      },
      {
        group: false,
        name: 'menu',
      },
      {
        group: true,
        groupName: 'Pages',
        links: [
          {
            group: false,
            name: 'booking',
          },
          {
            group: false,
            name: 'team',
          },
          {
            group: false,
            name: 'testimonial',
          },
        ],
      },
      {
        group: false,
        name: 'contact',
      },
    ],
    []
  )

  const toggleLinks = useCallback(() => {
    setShowLinksContainer(prev => !prev)
  }, [])

  const linksContainerClass = useMemo(() => {
    let classes = 'navbar-links__container'

    if (showLinksContainer) {
      classes += ' show'
    }

    return classes
  }, [showLinksContainer])

  const checkActive = useCallback(
    (linkOrGroup: NavbarLink) => {
      let active = false

      if (linkOrGroup.group) {
        active = linkOrGroup.links.findIndex(checkActive) !== -1
      } else {
        active = location.pathname === routes[linkOrGroup.name].absolutePath
      }

      return active
    },
    [location.pathname]
  )

  const linksElements = useMemo(
    () =>
      links.map(linkOrGroup => {
        const active = checkActive(linkOrGroup)

        return (
          <LinkOrGroup
            key={
              linkOrGroup.group
                ? linkOrGroup.groupName
                : routes[linkOrGroup.name].absolutePath
            }
            link={linkOrGroup}
            className={`navbar-item ${active ? 'active' : ''}`}
          />
        )
      }),
    [checkActive, links]
  )

  return (
    <nav className="navbar bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link className="navbar-brand" to="/">
        <h1 className="text-primary m-0">
          <FontAwesomeIcon icon={faUtensils} className="mr-3" />
          Restoran
        </h1>
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleLinks}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={linksContainerClass} id="navbar-collapse">
        <div className="navbar-links ml-auto py-0 pr-4">{linksElements}</div>
        <a href="" className="btn btn-primary py-2 px-4">
          Book A Table
        </a>
      </div>
    </nav>
  )
}
