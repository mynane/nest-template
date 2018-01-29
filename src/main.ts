require('dotenv').load();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import { NestFactory } from '@nestjs/core';

import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as session from 'express-session';
import * as flash from 'express-flash';
import * as config from './config/environment';
import { ApplicationModule } from './app.module';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
// import { RolesGuard } from './common/guard/roles.guard';
// import { LoggingInterceptor } from './common/interceptor/logging.interceptor';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';

// mongodb 链接
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);

    app.setGlobalPrefix('v1');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use(cookieParser('node-auth'));
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }));
    app.use(flash())

    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(new TransformInterceptor())
    //   app.useGlobalGuards(new RolesGuard());

    await app.listen(4000);
}

bootstrap();
