import { query } from "express";
import db from "../users.js";

export function insertNewtUser(username, email, password, fullname, role, res) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO users (username, email, password, fullname, role) VALUES (?, ?, ?, ?, ?)",
      [username, email, password, fullname, role],
      (err) => {
        if (err) {
          reject({ code: 500, message: "Error registering user" });
        }
        resolve({ code: 201, message: "User registered successfully" });
      }
    );
  });
}

export function existsUser(field, value) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM users WHERE ${field} = ?`,
      [value],
      (err, existingUser) => {
        if (err) {
          reject({ code: 404, message: "User not found" });
        }
        resolve({
          code: 409,
          message: "User already exists",
          query: existingUser,
        });
      }
    );
  });
}
