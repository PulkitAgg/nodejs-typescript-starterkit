import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ debug: !!process.env.DEBUG });

import { cfg, dbConfig, expressConfig } from './config';

import routes from './route';

const DEFAULT_PORT = 5000;


dbConfig(cfg, (error: Error) => {
    if (error) {
        console.log('error in connecting to db', error);
        return;
    }

    // init express app
    const app = express();

    // config express
    expressConfig(app);

    // attach the routes to the app
    routes(app);

    // start server
    app.listen(process.env.PORT || DEFAULT_PORT, () => {
        console.log(`Express server listening on ${process.env.PORT || DEFAULT_PORT} port`);
    });
});