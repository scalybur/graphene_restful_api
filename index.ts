import container from './src/containers/main.container'
import mongoose from 'mongoose'
const server = container.resolve('server')
const { MONGO_URI } = container.resolve('configuration')

mongoose
    .connect(MONGO_URI)
    .then(() => server.start())
    .catch((e: Error)=>{
        // eslint-disable-next-line no-console
        console.error(e.message)
        process.exit(0)
    })