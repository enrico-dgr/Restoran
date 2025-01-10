import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CardPros.scss'

export interface CardProsProps {
  title: string
  description: string
  icon: IconDefinition
}

export default function CardPros({ title, description, icon }: CardProsProps) {
  return (
    <div className="card-pros pt-3">
      <div className="p-4">
        <FontAwesomeIcon icon={icon} size="3x" className="mb-4" />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}
