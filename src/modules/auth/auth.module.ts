import * as passport from 'passport';
import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { LogInMiddleware } from '../auth/auth.middleware';
import { JwtStrategy } from './passport/jwt.strategy';
import { LocalStrategy } from './passport/local.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from '../../database/database.module';
import { UsersProviders } from '../users/users.providers';

@Module({
    imports: [DatabaseModule],
    components: [AuthService, JwtStrategy, LocalStrategy, ...UsersProviders],
    controllers: [AuthController]
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        // consumer.apply(LogInMiddleware).forRoutes(AuthController)
    }
}
