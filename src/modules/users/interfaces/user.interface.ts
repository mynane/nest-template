import { Document } from 'mongoose';

export interface User extends Document {
    readonly name: string;
    readonly password: string;
    readonly salt: string;
    readonly sex: number;
    readonly birthday: Date;
    readonly phone: number;
    readonly email: string;
    readonly activity: boolean;
    readonly roles: string
}