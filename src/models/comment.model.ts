import mongoose, { Model, ObjectId, Schema } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

export interface IComment {
    comment: string
    description: string
    author: Schema.Types.ObjectId
}

export type ICommentModel = Model<IComment>

const CommentSchema = new Schema<IComment>({
    comment: { type: String, required: true },
    description: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true, autopopulate: true }
})

CommentSchema.plugin(autopopulate)

export const Comment = mongoose.model('comment', CommentSchema)