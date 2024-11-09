import bcrypt from "bcrypt";
import { getUser } from "./querys.js";
import createToken from "./sesion.js";

async function loginUser(req, res) {
  const body = req.body;
  getUser(body.email)
    .then((result) => {
      const token = createToken(body.email);
      res.cookie("token", token);
      res.status(result.code).json({ message: result.message });
    })
    .catch((err) => {
      res.status(err.code).json({ error: err.message });
    });
}

export default loginUser;
