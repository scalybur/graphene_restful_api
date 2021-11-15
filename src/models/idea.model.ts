import mongoose, { Schema } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    description: { type: String },
    upVotes: [{ type: Boolean }],
    downVotes: [{ type: Boolean }],
    author: { type: Schema.Types.ObjectId, ref: "user", required: true, autopopulate: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "comment", required: true, autopopulate: true },]
})

IdeaSchema.plugin(autopopulate)

export const Idea = mongoose.model('idea', IdeaSchema)