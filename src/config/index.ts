
if (process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}


export = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    APPLICATION_SECRET: process.env.APPLICATION_SECRET || "BROKEN"
}