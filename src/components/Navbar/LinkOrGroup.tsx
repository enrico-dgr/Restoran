import { Link, useLocation } from 'react-router-dom'
import routes from '../../routes'
import { useCallback, useMemo } from 'react'

export type NavbarLink =
  | {
      group: false
      name: keyof typeof routes
      links?: undefined
    }
  | {
      group: true
      groupName: string
      links: NavbarLink[]
    }

export default function LinkOrGroup({
  link,
  layer = 0,
}: {
  className?: string
  link: NavbarLink
  layer?: number
}) {
  const location = useLocation()

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

  const active = checkActive(link)

  const classModifiers =
    (layer === 0 ? 'navbar-item' : '') + (active ? ' active' : '')

  const links = useMemo(() => {
    if (!link.group) {
      return []
    }

    return link.links.map(link => {
      return (
        <LinkOrGroup
          key={link.group ? link.groupName : link.name}
          link={link}
          layer={layer + 1}
        />
      )
    })
  }, [link.group, link.links, layer])

  if (!link.group) {
    const publicName = routes[link.name].publicName

    return (
      <Link
        to={routes[link.name].absolutePath}
        className={`navbar-link text-white ${classModifiers}`}
      >
        {publicName}
      </Link>
    )
  }

  return (
    <div className={`dropdown ${classModifiers}`}>
      <span className="navbar-link text-white dropdown-toggle">
        {link.groupName}
      </span>
      <div className="dropdown-menu py-2 px-0 m-0">{links}</div>
    </div>
  )
}
