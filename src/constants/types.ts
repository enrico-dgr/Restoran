export type ENV = 'dev' | 'prod'

export type EnvLike<O> = Record<ENV, O>
