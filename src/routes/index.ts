export { homeRoutes } from './home.routes'

import express, { Router } from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import { notFoundMiddleware } from '../middlewares/not-found.middleware'
import { errorMiddleware } from '../middlewares/error.middleware'
require('express-async-errors')

export function routes(homeRoutes: Router){
    const router = express.Router()
    const apiRoutes = express.Router()

    apiRoutes
    .use(express.json())
    // .use(express.urlencoded({ extended: true}))
    .use(cors())
    .use(helmet())
    .use(compression())

    apiRoutes.use('/home', homeRoutes)

    router.use('v1/api', apiRoutes)
    router.use(notFoundMiddleware)
    router.use(errorMiddleware)

    return router
}
