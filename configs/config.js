module.exports = {
    jwtSecret: 'Absolutely secret key',
    DB_MONGO_URL: 'mongodb://localhost:27017/backend_study',
    DB_MONGO_OPTIONS: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
}