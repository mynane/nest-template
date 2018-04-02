import { Module, MiddlewaresConsumer } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../../database/database.module';
import { JwtMiddleware } from '../auth/auth.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  components: [CatsService, ...catsProviders],
})
export class CatsModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer
        .apply(JwtMiddleware)
        .forRoutes(CatsController)
}
}
