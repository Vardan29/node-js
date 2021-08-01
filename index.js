const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers/router');
const {DB_MONGO_URL, DB_MONGO_OPTIONS} = require('./configs/config');

const PORT = 8000;

const app = express();

app.use(express.json());

app.use('/', router);

(async () => {
    try {
        await mongoose.connect(DB_MONGO_URL, DB_MONGO_OPTIONS).then(res => {
            console.log('MongoDB connected');
        }).catch(err => {
            console.log(err);
        });
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
})();
