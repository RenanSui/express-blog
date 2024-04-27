export declare global {
  namespace Express {
    interface Request {
      params: {
        id: string
      }
      userData: string | jwt.JwtPayload
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number
      MONGODB_URI: string
      STORAGE_PATH: string
      APP_URL: string
      JWT_SECRET: string
      JWT_EXPIRATION: string
    }
  }
}
