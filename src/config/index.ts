import dotenv from 'dotenv'

if (process.env.NODE_ENV !== "production"){
    dotenv.config()
}

export const PORT = process.env.PORT
export const MONGO_URI = process.env.MONGO_URI
export const APPLICATION_NAME = process.env.APPLICATION_NAME
export const APPLICATION_SECRET = process.env.APPLICATION_SECRET || "BROKEN"