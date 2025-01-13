import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardPros.scss'
import { ForwardedRef, forwardRef, useMemo } from 'react'

export interface CardProsProps {
  title: string
  description: string
  icon: IconDefinition
  className?: string
}

function CardPros(
  { title, description, icon, className }: CardProsProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const classes = useMemo(() => {
    let value = 'card-pros mt-4'

    if (className) {
      value += ` ${className}`
    }

    return value
  }, [className])

  return (
    <div className={classes} ref={ref}>
      <div className="card-pros__content">
        <FontAwesomeIcon icon={icon} size="3x" className="mb-4" />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default forwardRef(CardPros)
