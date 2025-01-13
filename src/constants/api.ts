import { EnvLike } from './types'

type APIs = {
  main: string
  menu: string
}

const dev: APIs = {
  main: 'http://18.194.21.216/api',
  menu: 'http://18.194.21.216/api/menu',
}

const prod: APIs = {
  main: 'http://18.194.21.216/api',
  menu: 'http://18.194.21.216/api/menu',
}

export default {
  dev,
  prod,
} as EnvLike<APIs>
