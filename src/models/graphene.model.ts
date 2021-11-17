import { Model } from "mongoose"

export class Graphene implements IGraphene{
    description = ""
    constructor(description: string){
        this.description = description
    }
}

export interface IGraphene {
    description: string
}

export type IGrapheneModel = Model<IGraphene>