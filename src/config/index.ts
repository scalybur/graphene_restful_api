import dotenv from 'dotenv'

if (process.env.NODE_ENV !== "production"){
    dotenv.config()
}

export interface IConfiguration {
    PORT: number
    MONGO_URI: string
    APPLICATION_NAME: string
    APPLICATION_SECRET: string
}

export const configuration: IConfiguration = {
    PORT : Number(process.env.PORT) || 4000,
    MONGO_URI : process.env.MONGO_URI || '',
    APPLICATION_NAME : process.env.APPLICATION_NAME || 'GrapheneApi',
    APPLICATION_SECRET : process.env.APPLICATION_SECRET || "BROKEN",
}