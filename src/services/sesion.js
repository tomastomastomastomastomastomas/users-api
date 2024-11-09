import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const sceretKey = process.env.SECRET_KEY;
function createToken(email) {
  const token = jwt.sign({ email }, sceretKey, { expiresIn: "1h" });
  return token;
}
export default createToken;
