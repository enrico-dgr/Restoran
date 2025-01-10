import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import CardPros from '../../components/Cards/CardPros/CardPros'
import useVisualized from '../../hooks/useVisualized/useVisualized'

const description =
  'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'

export default function CardsProsContainer() {
  const { ref, visualized } = useVisualized()

  return (
    <div className="cards-pros-container" ref={ref}>
      {visualized && (
        <>
          <CardPros
            description={description}
            icon={faUserTie}
            title="Master Chefs"
          />
          <CardPros
            description={description}
            icon={faUtensils}
            title="Quality Food"
          />
          <CardPros
            description={description}
            icon={faCartPlus}
            title="Online Order"
          />
          <CardPros
            description={description}
            icon={faHeadset}
            title="24/7 Service"
          />
        </>
      )}
    </div>
  )
}
