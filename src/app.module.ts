import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

@Module({
    modules: [ ]
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void { }
}