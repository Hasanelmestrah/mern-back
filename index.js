import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

await db();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world.....");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
