require('source-map-support').install();

import express from 'express';
import mongoose from 'mongoose'
import router from './routers/router';
import {config} from 'dotenv';

config();

const PORT: string | number = process.env.PORT || 8000;

const app = express();

app.use(express.json());
console.log(process.env.PORT);

(async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        app.use('/api', router);

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
})();
