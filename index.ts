import express from 'express'
import { Graphene } from './src/models/graphene'
const app = express()

app.get('/', (req, res, next)=>{
    let graphs = []

    for (let u = 0; u < 1000; u++){
        graphs.push(new Graphene(`Graphene material ${u}`))
    }

    res.status(200).send(graphs)
})

app.listen(4000, ()=> console.log('Running')).on('error', console.log)