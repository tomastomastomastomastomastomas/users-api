import express from "express";
import registerUser from "./services/register.js";
const app = express();
app.use(express.json());
app.post("/register", registerUser);
export default app;
