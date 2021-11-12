// export * from './home.routes'

import express from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import { HomeRoutes } from './home.routes'
require('express-async-errors')

export function e({  }){
    const router = express.Router()
    const apiRoutes = express.Router()

    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())

    apiRoutes.use('/home', HomeRoutes)

    router.use('v1/api', apiRoutes)

}