import { Link, useLocation } from 'react-router-dom'
import './HeaderBreadcrumb.scss'
import { useMemo } from 'react'
import routes from '../../../routes'

export default function HeaderBreadcrumb() {
  const location = useLocation()

  const activeRoute = useMemo(() => {
    const activeKey = Object.keys(routes).find(
      key =>
        routes[key as keyof typeof routes].absolutePath === location.pathname
    )

    if (activeKey) {
      return routes[activeKey as keyof typeof routes]
    }

    return undefined
  }, [location.pathname])

  const activeRoutePath = useMemo(() => {
    const routePath = activeRoute?.publicPath ?? ''

    return routePath.split('/').filter(Boolean).map(BreadcrumbItem)
  }, [activeRoute])

  return (
    <div className="header-breadcrumb__container my-5 pt-5 pb-4">
      <h1 className="text-3 text-white mb-3 slideInDown">
        {activeRoute?.headerTitle}
      </h1>
      <nav className="header-breadcrumb">{activeRoutePath}</nav>
    </div>
  )
}

function BreadcrumbItem(section: string, i: number, arr: string[]) {
  const isLast = i === arr.length - 1

  const correspondingRoute = Object.entries(routes).find(([key]) =>
    routes[key as keyof typeof routes].absolutePath.includes(section)
  )?.[1]

  return correspondingRoute && !isLast ? (
    <Link
      to={correspondingRoute.absolutePath}
      className="header-breadcrumb__item text-primary"
      key={'header-breadcrumb__item-' + i}
    >
      {section}
    </Link>
  ) : (
    <span
      className={`header-breadcrumb__item ${
        isLast ? 'text-white' : 'text-primary'
      }`}
      key={'header-breadcrumb__item-' + i}
    >
      {section}
    </span>
  )
}
