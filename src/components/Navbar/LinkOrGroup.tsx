import { Link } from 'react-router-dom'
import routes from '../../routes'
import { useMemo } from 'react'

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
  className,
  link,
  layer = 0,
}: {
  className?: string
  link: NavbarLink
  layer?: number
}) {
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
        to={link.name}
        className={`navbar-link text-white ${className ?? ''}`}
      >
        {publicName}
      </Link>
    )
  }

  return (
    <div className={`dropdown ${className ?? ''}`}>
      <span className="navbar-link text-white dropdown-toggle">
        {link.groupName}
      </span>
      <div className="dropdown-menu py-2 px-0 m-0">{links}</div>
    </div>
  )
}
