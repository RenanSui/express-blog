import { connect, connection } from 'mongoose'

export const mongoose = {
  run: async () => {
    try {
      return await connect(process.env.MONGODB_URI)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  },

  stop: async () => {
    try {
      return await connection.destroy()
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  },
}
