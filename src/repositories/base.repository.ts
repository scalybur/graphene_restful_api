import { Model, UpdateQuery } from "mongoose";


export class BaseRepository<T> {
    model
    constructor(model: Model<T>){
        this.model = model
    }

    async get(id: string){
        return await this.model.findById(id)
    }

    async getAll(){
        return await this.model.find()
    }

    async create(entity: Record<string, unknown>){
        return await this.model.create(entity)
    }

    async update(id: string, entity: UpdateQuery<T>){
        return await this.model.findByIdAndUpdate(id, entity, { new: true })
    }

    async delete(id: string){
        return await this.model.findByIdAndDelete(id)
    }
}