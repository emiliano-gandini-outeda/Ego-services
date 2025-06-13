declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY?: string
    PORT?: string
    NODE_ENV?: "development" | "production" | "test"
  }
}
