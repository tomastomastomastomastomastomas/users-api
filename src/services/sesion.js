import jwt from "json";
const privateKey = process.env.PRIVATE_KEY;
function createToken(userId, email) {
  jwt.sign({ userId, email }, privateKey, { expiresIn: "1h" });
}
