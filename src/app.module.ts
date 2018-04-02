import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [CatsModule, UsersModule, AuthModule]
})
export class ApplicationModule {}
