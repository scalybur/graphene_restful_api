import mongoose, { Schema } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

const CommentSchema = new Schema({
    comment: { type: String, required: true },
    description: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true, autopopulate: true }
})

CommentSchema.plugin(autopopulate)

export const Comment = mongoose.model('comment', CommentSchema)