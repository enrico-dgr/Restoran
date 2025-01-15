import CardTeam, { CardTeamProps } from './CardTeam'
import './CardsTeam.scss'
import Section from '../../Section/Section'

export default function CardsTeam({ cards }: { cards: CardTeamProps[] }) {
  return (
    <Section className="cards-team">
      <div className="cards-team__header">
        <h5 className="section-title before after">Team Members</h5>
        <h1 className="mb-4">Our Master Chefs</h1>
      </div>
      <div className="cards-team__content">
        {cards.map(({ name, ...props }, i) => (
          <CardTeam key={`card-team_${name}_${i}`} name={name} {...props} />
        ))}
      </div>
    </Section>
  )
}
