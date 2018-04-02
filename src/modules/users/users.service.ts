import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/user.dto';
import { success } from '../../common/common.utils';

@Component()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser: any = new this.userModel(createUserDto);
    createdUser.setPassword(createUserDto.password);
    await createdUser.save();
    return success({
        access_token: createdUser.generateJwt()
    })
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}