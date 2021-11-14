import { createContainer, asClass, asValue, asFunction, AwilixContainer } from 'awilix'
import * as Configuration from '../config'
import { HomeService } from '../services'
import { HomeController } from '../controllers'
import { routes, homeRoutes } from '../routes'
import { Server } from '../models'

export const container: AwilixContainer = createContainer()

container
.register({
    server: asClass(Server).singleton(),
    routes: asFunction(routes).singleton(),
    configuration: asValue(Configuration)
})
.register({
    HomeService: asClass(HomeService).singleton(),
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
})
.register({
    homeRoutes: asFunction(homeRoutes).singleton(),
})
