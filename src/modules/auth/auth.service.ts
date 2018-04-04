import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Component, HttpException, Inject } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { success } from '../../common/common.utils';
import { User } from '../users/interfaces/user.interface';
import CONFIG from '../../../config';

@Component()
export class AuthService {

    constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

    async createToken(signedUser) {
        // 七天过期
        const {expiresIn, secretOrKey} = CONFIG;
        const user = { sub: signedUser._id, name: signedUser.name };
        const token = jwt.sign(user, secretOrKey, { expiresIn });
        return success({
            access_token: token,
        })
    }

    async validateUser(payload): Promise<any> {
        const user = await this.userModel.findById(payload.sub);
        if (!user) {
            throw new HttpException('无效的授权', 404)
        }
        return user
    }

    async activation(id) {
        const user = await this.userModel.findById(id);
        if (!user.activity) {
            await this.userModel.findByIdAndUpdate(id, { $set: { activity: true }});
            return true;
        } else {
            return false;
        }
    }

}
