import { HomeService } from "../services"
import { Request, Response, NextFunction } from "express"
import { IMainContainer } from "../containers/main.container"

let _homeService: HomeService
export class HomeController implements IHomeController {
    constructor({ HomeService : HomeService } : IMainContainer) {
        _homeService = HomeService
    }

    index(req: Request, res: Response){
        return res.send(_homeService.index())
    }
}

export interface IHomeController {
    index(req: Request, res: Response) : Response
}