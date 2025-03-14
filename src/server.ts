import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import adminRoutes from "./routes/adminRoute";

dotenv.config();

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected");

    const PORT = process.env.PORT || 3400;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("Database Connection Error:", err));

app.use("/api/admin", adminRoutes);
