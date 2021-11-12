
export class Graphene implements IGraphene{
    description: string = ""
    constructor(description: string){
        this.description = description
    }
}

export interface IGraphene {
    description: string
}