import db from "../users.js";

export function insertNewtUser(username, email, password, fullname, role, res) {
  let result = {};
  db.run(
    "INSERT INTO users (username, email, password, fullname, role) VALUES (?, ?, ?, ?, ?)",
    [username, email, password, fullname, role],
    (err) => {
      if (err) {
        res.status(500).json({ error: "Error registering user" });
        return;
      }
      res.status(201).json({ message: "User registered successfully" });
    }
  );
  return result;
}

export function getUser(email) {
  db.get(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, existingUser) => {
      if (err) {
        return { code: 500, error: "Error registering user" };
      }
      return existingUser;
    }
  );
}
