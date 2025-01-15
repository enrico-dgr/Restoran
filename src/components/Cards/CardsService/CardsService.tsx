import CardPros, { CardServiceProps } from './CardService'
import './CardsService.scss'
import Section from '../../Section/Section'

export default function CardsService({ cards }: { cards: CardServiceProps[] }) {
  return (
    <Section className="cards-service">
      {cards.map(({ description, icon, title }, i) => (
        <CardPros
          key={`card-service_${title}_${i}`}
          description={description}
          icon={icon}
          title={title}
        />
      ))}
    </Section>
  )
}
