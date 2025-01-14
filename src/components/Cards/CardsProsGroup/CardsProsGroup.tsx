import CardPros, { CardProsProps } from '../CardPros/CardPros'
import useVisualized from '../../../hooks/useVisualized/useVisualized'
import './CardsProsGroup.scss'
import Section from '../../Section/Section'

function AnimatedCard(props: CardProsProps) {
  const { ref, visualized } = useVisualized()

  return <CardPros {...props} ref={ref} className={visualized ? 'show' : ''} />
}

export default function CardsProsGroup({ cards }: { cards: CardProsProps[] }) {
  return (
    <Section className={'cards-pros-group'}>
      {cards.map(({ description, icon, title }, i) => (
        <AnimatedCard
          key={`card-pros_${title}_${i}`}
          description={description}
          icon={icon}
          title={title}
        />
      ))}
    </Section>
  )
}
