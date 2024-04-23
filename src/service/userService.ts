export const userService = {
  create: ({ email, password }: { email: string; password: string }) => {
    console.log({ email, password })
  },

  login: ({ email, password }: { email: string; password: string }) => {
    console.log({ email, password })
  },

  logout: () => {
    console.log('Logged out')
  },
}
