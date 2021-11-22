import express, { json, urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';

dotenv.config({ path: './.env' });

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

export default app;
