import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel} from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User } from "./../types/user";
import { RegisterDTO } from "./dto/register-dto";
import * as bcrypt from 'bcrypt';
import { LoginDTO } from "./dto/login-dto";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    private omitPassword(username: string) {
        return this.userModel.findOne({ username }).select('-password');
    }

    async create(userDTO: RegisterDTO): Promise<User> {
        const { username } = userDTO;
        const user = await this.userModel.findOne({ username });

        if(user) {
            throw new HttpException('User is already exist!', HttpStatus.UNAUTHORIZED);
        }

        const createdUser = new this.userModel(userDTO);

        await createdUser.save();

        return this.omitPassword(username);

    }

    async findByLogin(userDTO: LoginDTO): Promise<User> {
        const { username, password } = userDTO;
        const user = await this.userModel.findOne({ username });

        if(!user) {
            throw new HttpException('Invalid credintial!', HttpStatus.UNAUTHORIZED);
        }

        if(await bcrypt.compare(password, user.password)) {
            return this.omitPassword(username);
        } else {
            throw new HttpException('Invalid credintial!', HttpStatus.UNAUTHORIZED);
        }
    }

    async findByPayload(payload: any) {
        const { username } = payload;
        return this.userModel.findOne({username});
    }
}