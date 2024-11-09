import express from "express";
import registerUser from "./services/register.js";
import loginUser from "./services/login.js";
const app = express();
app.use(express.json());
app.post("/register", registerUser);
app.post("/login", loginUser);
export default app;
