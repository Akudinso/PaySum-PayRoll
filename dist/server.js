"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./config/data-source");
const adminRoute_1 = __importDefault(require("./routes/adminRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database Connected");
    const PORT = process.env.PORT || 3400;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((err) => console.log("Database Connection Error:", err));
app.use("/api/admin", adminRoute_1.default);
