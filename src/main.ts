require('dotenv').load();

import { NestFactory } from '@nestjs/core';

import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as session from 'express-session';
import * as flash from 'express-flash';
import * as express from 'express';
import * as path from 'path';

import CONFIG from '../config';
import { ApplicationModule } from './app.module';

import { ValidationPipe } from './common/pipes/validation.pipe';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

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

    app.use(express.static(path.join(__dirname, 'public')));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    /** nest通用 */
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new HttpExceptionFilter());
    /** nest通用 */

    await app.listen(CONFIG.port);
}

bootstrap();
