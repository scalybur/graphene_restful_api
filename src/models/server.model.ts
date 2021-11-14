import express, { Express, Router } from 'express'

let _configuration: any
let _router: Router

export class Server {
    public app: Express

    constructor(private readonly configuration: any, private readonly router: Router){
        this.app = express()
        _configuration = configuration
        _router = router

        this.app.use(_router)
    }

    start(){
        return new Promise((resolve, reject) =>{
            this.app.listen(_configuration.PORT, ()=>{
                // eslint-disable-next-line no-console
                console.log(`Graphene API running on port: ${_configuration.PORT}`)
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