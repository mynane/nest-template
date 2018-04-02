/**
 * @file user.model.ts
 * @author shijh
 *
 * 用户Schema
 */

import * as mongoose from 'mongoose';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import CONFIG from '../../../../config';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    // 用户名
    name: { type: String, unique: true, required: true },
    // 密码
    password: { type: String },
    // 密码hash
    salt: { type: String },
    // 性别0：女，1：男
    sex: { type: Number, default: 1 },
    // 生日
    birthday: {type: Date, default: Date.now},
    // 手机号
    phone: Number,
    // 邮箱
    email: { type: String, required: true },
    // 是否可用, 默认可用
    activity: {type: Boolean, default: false},
    // 角色 "管理员：admin、超级管理员：administrator "
    roles: {type: String, default: ''}
}, {
    versionKey: false
});

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    //1000代表迭代次数 64代表长度
    this.password = crypto.pbkdf2Sync(`${password}`, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    console.log(this.salt);
    var hash = crypto.pbkdf2Sync(`${password}`, this.salt, 1000, 64, 'sha512').toString('hex');
    console.log(hash)
    return this.password === hash;
};

UserSchema.methods.generateJwt = function() {
    const { expiresIn, secretOrKey } = CONFIG;
    const user = { sub: this._id, name: this.name };
    return jwt.sign(user, secretOrKey, { expiresIn });
};

export default UserSchema;
