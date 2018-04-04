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

        try {
            const cry = decrypto(token);
            const result = await this.authService.activation(cry.id);
            return {type: result};
        } catch (error) {
            return {type: false};
        }
    }
}
