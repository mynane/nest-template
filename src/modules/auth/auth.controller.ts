import { Controller, Post, Req, Body, HttpStatus, HttpCode, Get, Param, Response, Render } from '@nestjs/common';
import { AuthService } from './auth.service';
import { decrypto } from '../../common/utils/crypto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    public async login( @Req() req) {
        return await this.authService.createToken(req.user);
    }

    @Get('/:token')
    @Render('verification')
    public async verification(@Response() res, @Param('token') token) {
        const id = token;
        const date: any = new Date();

        try {
            const cry = decrypto(token);
            const time = date * 1;
            const over = time - cry.time;
            const effective = over < 30 * 60 * 1000 && over > 0;

            if (effective) {
                await this.authService.activation(cry.id);
            } else {
                return {type: '验证失效'}
            }
        } catch (error) {
            return {type: '激活失败'};
        }
    }
}
