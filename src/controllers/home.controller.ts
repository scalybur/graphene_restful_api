import { HomeService } from "../services"
import { Request, Response, NextFunction } from "express"

let _homeService: HomeService
export class HomeController implements IHomeController {
    constructor( HomeService : HomeService) {
        _homeService = HomeService
    }

    index(req: Request, res: Response){
        return res.send(_homeService.index())
    }
}

export interface IHomeController {
    index(req: Request, res: Response) : Response
}