"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./routers/router"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
const PORT = process.env.PORT || 8000;
const app = express_1.default();
app.use(express_1.default.json());
console.log(process.env.PORT);
(async () => {
    try {
        await mongoose_1.default.connect(process.env.DB_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.use('/api', router_1.default);
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    }
    catch (e) {
        console.error(e);
    }
})();
//# sourceMappingURL=server.js.map