import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { sendEmail } from '../../common/email.service';
import { encrypto, decrypto } from '../../common/utils/crypto';
import { success } from '../../common/common.utils';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const result: any = await this.usersService.create(createUserDto);
    const time: any = new Date();

    const cry = encrypto({
      id: result._id,
      time: time * 1
    });

    sendEmail(createUserDto.email, 'register', {...createUserDto, url: `http://localhost:4000/v1/auth/${cry}`});

    return success({}, '邮件已经发送到你的邮箱了，请激活');
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
