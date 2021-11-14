
export class Graphene implements IGraphene{
    description = ""
    constructor(description: string){
        this.description = description
    }
}

export interface IGraphene {
    description: string
}