export declare global {
  namespace Express {
    interface Request {
      params: {
        id: string
      }
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number
      MONGODB_URI: string
      STORAGE_PATH: string
      APP_URL: string
    }
  }
}
