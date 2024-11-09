import bcrypt from "bcrypt";
import { insertNewtUser } from "./querys.js";
import createToken from "./sesion.js";
const saltRounds = 10;

// bcrypt.hash("myPlaintextPassword", saltRounds, function (err, hash) {
//   if (err) {
//     console.error("Error al generar el hash:", err);
//     return;
//   }

//   console.log("Hash:", hash);

//   bcrypt.compare("myPlaintextPassword", hash, function (err, result) {
//     if (err) {
//       console.error("Error al comparar hash:", err);
//       return;
//     }
//     console.log("Comparación con contraseña correcta:", result);
//   });

//   bcrypt.compare("someOtherPlaintextPassword", hash, function (err, result) {
//     if (err) {
//       console.error("Error al comparar hash:", err);
//       return;
//     }
//     console.log("Comparación con contraseña incorrecta:", result);
//   });
// });

async function registerUser(req, res) {
  const body = req.body;
  const hash = await generateHash(body.password);
  insertNewtUser(body.userName, body.email, hash, body.fullname, "user")
    .then((result) => {
      const token = createToken(body.email);
      res.cookie("token", token);
      res.status(result.code).json({ message: result.message });
    })
    .catch((err) => {
      res.status(err.code).json({ message: err.message });
    });
}

function generateHash(password) {
  return bcrypt.hash(password, saltRounds);
}
export default registerUser;
