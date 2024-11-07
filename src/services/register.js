import bcrypt from "bcrypt";
const saltRounds = 10;
const myPlaintextPassword = "hola";
const someOtherPlaintextPassword = "not_bacon";

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  if (err) {
    console.error("Error al generar el hash:", err);
    return;
  }

  console.log("Hash:", hash);

  bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
    if (err) {
      console.error("Error al comparar hash:", err);
      return;
    }
    console.log("Comparación con contraseña correcta:", result);
  });

  bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
    if (err) {
      console.error("Error al comparar hash:", err);
      return;
    }
    console.log("Comparación con contraseña incorrecta:", result);
  });
});
