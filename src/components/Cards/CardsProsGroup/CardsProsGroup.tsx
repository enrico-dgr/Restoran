import CardPros, { CardProsProps } from '../CardPros/CardPros'
import useVisualized from '../../../hooks/useVisualized/useVisualized'
import './CardsProsGroup.scss'

export default function CardsProsContainer({
  cards,
}: {
  cards: CardProsProps[]
}) {
  const { ref, visualized } = useVisualized()

  return (
    <div className="container cards-pros-group" ref={ref}>
      {visualized &&
        cards.map(({ description, icon, title }) => (
          <CardPros description={description} icon={icon} title={title} />
        ))}
    </div>
  )
}
