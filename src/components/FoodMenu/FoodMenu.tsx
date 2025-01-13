import { useMemo, useState } from 'react'
import {
  faCoffee,
  faHamburger,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons'
import './FoodMenu.scss'
import MealType from './MealType'
import Section from '../Section/Section'
import Meal, { MealInfo } from './Meal'
import MealPlaceholder from './MealPlaceholder'
import useVisualized from '../../hooks/useVisualized/useVisualized'

interface MealsList {
  mealType: string
  description: string
  meals: MealInfo[]
}

export default function FoodMenu({
  numberOfElements,
}: {
  numberOfElements: number
}) {
  const { ref, visualized } = useVisualized()
  const [mealsState] = useState<'loading' | 'ready'>('loading')
  const [mealsLists] = useState<MealsList[]>([])

  const mealsListsElements = useMemo(() => {
    if (mealsState === 'loading') {
      return (
        <ul className="meals-list">
          {Array.from({ length: numberOfElements }).map((_, i) => (
            <MealPlaceholder key={`meal-placeholder-${i}`} />
          ))}
        </ul>
      )
    }

    if (mealsState === 'ready') {
      return mealsLists.map(({ meals }) => (
        <ul className="meals-list">
          {meals.map(({ ...props }, i) => (
            <Meal {...props} key={`meal-${props.name}-${i}`} />
          ))}
        </ul>
      ))
    }

    return <></>
  }, [mealsLists, mealsState, numberOfElements])

  return (
    <Section
      className={`food-menu ${visualized ? 'show fadeInUp' : ''}`}
      ref={ref}
    >
      <div className="food-menu__description">
        <h5 className="section-title before after">Food Menu</h5>
        <h1 className="mb-5">Most Popular Items</h1>
      </div>
      <div className="food-menu__sections">
        <ul className="meal-types">
          <MealType
            icon={faCoffee}
            active
            name="Breakfast"
            description="Popular"
          />
          <MealType icon={faHamburger} name="Launch" description="Special" />
          <MealType icon={faUtensils} name="Dinner" description="Lovely" />
        </ul>
        <div className="meals">{mealsListsElements}</div>
      </div>
    </Section>
  )
}
