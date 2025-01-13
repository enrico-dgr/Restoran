import CardPros, { CardProsProps } from '../CardPros/CardPros'
import useVisualized from '../../../hooks/useVisualized/useVisualized'
import './CardsProsGroup.scss'
import Section from '../../Section/Section'

function AnimatedCard(props: CardProsProps) {
  const { ref, visualized } = useVisualized()

  return (
    <CardPros {...props} ref={ref} className={visualized ? 'show' : ''} />
  )
}

export default function CardsProsContainer({
  cards,
}: {
  cards: CardProsProps[]
}) {
  return (
    <Section className={'cards-pros-group'}>
      {cards.map(({ description, icon, title }) => (
        <AnimatedCard description={description} icon={icon} title={title} />
      ))}
    </Section>
  )
}
