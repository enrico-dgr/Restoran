import constants from '../../constants'
import { MenuItem } from './types'

const numMocks = 20

const mockSalads: MenuItem[] = new Array(numMocks).map((_, index) => ({
  id: index,
  name: 'Salad',
  toppings: ['Tomato', 'Cheese', 'Mushrooms'],
  price: 15,
  image: 'https://via.placeholder.com/150',
  category: 'breakfast',
}))

const mockPizzas: MenuItem[] = new Array(numMocks).map((_, index) => ({
  id: index,
  name: 'Pizza',
  toppings: ['Tomato', 'Cheese', 'Neapolitan broccoli'],
  price: 15,
  image: 'https://via.placeholder.com/150',
  category: 'launch',
}))

const mockBurgers: MenuItem[] = new Array(numMocks).map((_, index) => ({
  id: index,
  name: 'Burger',
  toppings: ['Eggs', 'Cheese', 'Mayonnaise'],
  price: 15,
  image: 'https://via.placeholder.com/150',
  category: 'dinner',
}))

const mockMenu: MenuItem[] = [...mockSalads, ...mockPizzas, ...mockBurgers]

const byCategory = async ({
  category,
  mockDelay,
}: {
  category: string
  /**
   * If set and on bad response, a mock will be returned
   * instead of the error ( after the given delay ).
   */
  mockDelay: number
}): Promise<MenuItem[]> => {
  const meals: MenuItem[] = []

  const response = await fetch(constants.API.menu + category, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.ok) {
    meals.push(await response.json())
  } else if (mockDelay) {
    setTimeout(() => {
      meals.push(...mockMenu.filter(({ category: c }) => c === category))
    }, mockDelay)
  }

  return meals
}

export default {
  byCategory,
}
