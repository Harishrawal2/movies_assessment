import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import MongoDBConnection from "./src/config/db.js";
import MovieRoutes from "./src/routes/movie.route.js";

// Express app
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Database Connection
MongoDBConnection();

// dotenv
dotenv.config();

// Movies Routes
app.use("/api", MovieRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is connected on port ${port}`);
});
