import mongoose, { Model, Schema } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

export interface IIdea {
    idea: string
    description: string
    upVotes: boolean
    downVotes: boolean
    author: Schema.Types.ObjectId
    comments: Schema.Types.ObjectId[]
}

export type IIdeaModel = Model<IIdea>

const IdeaSchema = new Schema<IIdea>({
    idea: { type: String, required: true },
    description: { type: String },
    upVotes: [{ type: Boolean }],
    downVotes: [{ type: Boolean }],
    author: { type: Schema.Types.ObjectId, ref: "user", required: true, autopopulate: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "comment", required: true, autopopulate: true },]
})

IdeaSchema.plugin(autopopulate)

export const Idea = mongoose.model('idea', IdeaSchema)