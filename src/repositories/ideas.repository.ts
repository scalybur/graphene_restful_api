import { IMainContainer } from "../containers/main.container";
import { IIdea, IIdeaModel } from "../models/idea.model";
import { BaseRepository } from "./base.repository";
import mongoose, { ObjectId } from 'mongoose'

let _idea: IIdeaModel

export class IdeaRepository extends BaseRepository<IIdea> {
    constructor({ Idea } : IMainContainer){
        super(Idea)
        _idea = Idea
    }

    async getUserIdeas(author: ObjectId){
        return await _idea.find(author)
    }
}