require('dotenv').load();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import { NestFactory } from '@nestjs/core';

import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as session from 'express-session';
import * as flash from 'express-flash';

import CONFIG from '../config';
import { ApplicationModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);

    app.setGlobalPrefix(CONFIG.version);
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

    await app.listen(CONFIG.port);
}

bootstrap();
