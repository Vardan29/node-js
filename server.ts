require('source-map-support').install();

import {config} from 'dotenv';
import express from 'express';
import mongoose from 'mongoose'
import router from './src/routers/router';

// Loading environment variables into process.env.
config();

// Registering PORT on which server must run.
const PORT: number = +process.env.PORT || 8000;

// Initializing server.
const app = express();

// Using parsing global middleware from the express library.
app.use(express.json());

// The asynchronous function that runs all connections and if everything is alright start the server.
(async () => {
    try {
        // Connecting database.
        await mongoose.connect(process.env.DB_MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        // If the connection was succeeded log that.
        console.log('MongoDB successfully connected.')

        // Any routes have to come after DB connection.
        app.use('/api/v1/', router);

        // Server start to listening to the port.
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    } catch (e) {
        // Catching and logging any errors that happened during the connection.
        console.error(e);
    }
})();
