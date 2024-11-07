import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
