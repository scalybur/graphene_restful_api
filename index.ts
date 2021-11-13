import express from 'express'
import { Graphene, IGraphene } from './src/models'
const app = express()
const { PORT } = require('./src/config')

app.use(express.json())
app.use(express.urlencoded({ extended: false })) // TODO

app.get('/', (req, res, next)=>{
    let graphs: IGraphene[] = []

    for (let u = 0; u < 1000; u++){
        graphs.push(new Graphene(`Graphene material ${u}`))
    }

    res.status(200).send(graphs)
})

app.listen(PORT, ()=> console.log('Running at port: ' + PORT)).on('error', console.log)