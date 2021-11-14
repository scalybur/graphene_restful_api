import { Router } from 'express'
import { HomeController } from '../controllers'

export function homeRoutes(homeController: HomeController): Router {
    const router = Router()
    router.get('/', homeController.index)


    return router
}
