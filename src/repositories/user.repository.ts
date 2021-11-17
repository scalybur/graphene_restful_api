import { IMainContainer } from "../containers/main.container";
import { User } from "../models";
import { IUser, IUserModel } from "../models/user.model";
import { BaseRepository } from "./base.repository";

let _user: IUserModel

export class UserRepository extends BaseRepository<IUser> {
    constructor({ User } : IMainContainer){
        super(User)
        _user = User
    }

    async getUserByUsername(username: string){
        return await _user.findOne({username})
    }
}