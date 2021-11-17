import { createContainer, asClass, asValue, asFunction, AwilixContainer } from 'awilix'
import { configuration } from '../config'
import { HomeService } from '../services'
import { HomeController } from '../controllers'
import { routes, homeRoutes } from '../routes'
import { Server, User, Comment, Idea, Graphene } from '../models'
import { Router } from 'express'
import { IConfiguration } from '../config'
import { IIdeaModel } from '../models/idea.model'
import { ICommentModel } from '../models/comment.model'
import { IUserModel } from '../models/user.model'
import { IGrapheneModel } from '../models/graphene.model'

const container: AwilixContainer = createContainer()

export interface IMainContainer {
    server: Server
    routes: Router
    configuration: IConfiguration
    User: IUserModel
    Graphene: IGrapheneModel
    Idea: IIdeaModel
    Comment: ICommentModel
    homeRoutes: Router
    HomeController: HomeController
    HomeService: HomeService
}

container
.register({
    server: asClass(Server).singleton(),
    routes: asFunction(routes).singleton(),
    configuration: asValue(configuration)
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
.register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
    Graphene: asValue(Graphene),
})

export default container