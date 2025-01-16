import { EnvLike } from './types'

type APIs = {
  main: string
  menu: string
  reviews: string
}

const dev: APIs = {
  main: 'http://18.194.21.216/api',
  menu: 'http://18.194.21.216/api/menu',
  reviews: 'http://18.194.21.216/api/reviews',
}

const prod: APIs = {
  main: 'http://18.194.21.216/api',
  menu: 'http://18.194.21.216/api/menu',
  reviews: 'http://18.194.21.216/api/reviews',
}

export default {
  dev,
  prod,
} as EnvLike<APIs>
