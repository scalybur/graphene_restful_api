import { Router } from 'express'
import { IMainContainer } from '../containers/main.container'

export function homeRoutes({ HomeController } : IMainContainer) {
    const router = Router()
    router.get('/', HomeController.index)


    return router
}
