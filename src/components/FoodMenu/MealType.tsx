import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MealType.scss'

export default function MealType({
  active = false,
  icon,
  name,
  description,
}: {
  active?: boolean
  icon: IconDefinition
  description: string
  name: string
}) {
  return (
    <li className={`meal-type ${active ? 'active' : ''}`}>
      <FontAwesomeIcon icon={icon} className="text-primary" size="2x" />
      <div className="meal-type__description">
        <small>{description}</small>
        <h6>{name}</h6>
      </div>
    </li>
  )
}
