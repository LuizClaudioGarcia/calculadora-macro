const express = require('express')
import user from "./routes/userRoutes";
import food from "./routes/foodRoutes";
import { createServer } from "http";

export function initServer() {
    const app = express();
    const PORT = process.env.PORT || 8080;

    const http = new createServer(app);
    
    app.use(express.json());
    app.use("/api/user", user);
    app.use("/api/food", food);

    http.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}