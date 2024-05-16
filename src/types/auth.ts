import { User } from './user'

export type SignInPayload = Pick<User, 'email' | 'password'>

export type SignUpPayload = Pick<User, 'email' | 'password'>
