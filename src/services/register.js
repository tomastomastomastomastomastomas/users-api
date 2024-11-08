import bcrypt from "bcrypt";
import { insertNewtUser, getUser } from "./querys.js";
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
  const hash = await generateHash(req.body.password);
  res.status(201).json({ message: "User registered succesfully" });
  const result = await insertNewtUser(
    body.userName,
    body.email,
    hash,
    body.fullname,
    "user"
  );
  console.log(result);
  if (result.error) {
    return res.status(result.code).json({ error: result.error });
  }
  res.status(result.code).json({ message: result.error });
}

function generateHash(password) {
  return bcrypt.hash(password, saltRounds);
}

export default registerUser;
