import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadconfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadconfig.directory));
app.use(routes);

app.listen(3333, () => console.log('servidor iniciado'));
