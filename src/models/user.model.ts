import mongoose, { Model, Schema } from 'mongoose'
import { compareSync, hashSync, genSaltSync } from 'bcryptjs'

export interface IUser {
    name: string
    username: string
    password: string
    mail: string
}

export type IUserModel = Model<IUser>

const UserSchema  = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    mail: { type: String, required: false },
})

// hooks

UserSchema.methods.comparePassword = function(password){
    return compareSync(password, this.password)
}

UserSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    return user
}

UserSchema.pre('save', async function(next){
    const user = this.toObject()
    if(!user.isModified('password')){
        return next()
    }

    const salt = genSaltSync(10)
    const hashedPassword = hashSync(user.password, salt)
    user.password = hashedPassword
    next()
})

export const User = mongoose.model("user", UserSchema)