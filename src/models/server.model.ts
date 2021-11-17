import express, { Express, Router } from 'express'
import { IConfiguration } from '../config'
import { IMainContainer } from '../containers/main.container'

let _configuration: IConfiguration
let _router: Router

export class Server {
    public app: Express

    constructor({ configuration, routes } : IMainContainer){
        this.app = express()
        _configuration = configuration
        _router = routes

        this.app.use(_router)
    }

    start(){
        return new Promise((resolve, reject) =>{
            this.app.listen(_configuration.PORT, ()=>{
                // eslint-disable-next-line no-console
                console.log(`Graphene API running on port: ${_configuration.PORT}`)
                resolve(this)
            })
        })
    }
}


// app.get('/', (req, res, next)=>{
//     const graphs: IGraphene[] = []

//     for (let u = 0; u < 1000; u++){
//         graphs.push(new Graphene(`Graphene material ${u}`))
//     }

//     res.status(200).send(graphs)
// })