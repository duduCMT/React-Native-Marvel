import api from "./api"

const signIn = (user: Pick<User, 'email' | 'password'>) => (
  api.post('/signin', user)
)

export const AuthService = {
  signIn
}