import * as passport from 'passport';
import { Model } from 'mongoose';
import { Strategy } from 'passport-local';
import { Component, Inject } from '@nestjs/common';
import { User } from '../../users/interfaces/user.interface';

@Component()
export class LocalStrategy extends Strategy {
    constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {
        super(
            {
                usernameField: 'name',
                passReqToCallback: false
            },
            async (name, password, done) => await this.logIn(name, password, done)
        );
        passport.use(this);
    }

    async logIn(name, password, done) {
        const user: any = await this.userModel.findOne({name})
            .then(user => {
                const u: any = user;

                if (!u) {
                    return done('用户名或密码错误', false);
                }
                else if (!u.validPassword(password)) {
                    return done('用户名或密码错误', false)
                }
                else {
                    return done(null, u);
                }
            })
            .catch(err => {
                done(err, false)
            })
    }

}