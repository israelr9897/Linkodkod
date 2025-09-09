import {
  createToken,
  ReturnHashPassword,
  returnIsPassword,
} from "../db/services/authService.js";
import { getAllUsersDB, writeAllUsersDB } from "../db/usersDal.js";

export async function getAllUsers(req, res) {
  try {
    const users = await getAllUsersDB();
    console.log(users);
    res.json({ data: users });
  } catch (error) {
    console.log("get all users error massege: ", error);
    res.status(500).send({ msg: error });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const users = JSON.parse(await getAllUsersDB());
    const user = users.find((user) => user.username === username);
    if (!user) return res.status(403).json({ msg: "User not found" });
    const passIsTrue = await returnIsPassword(password, user.password);
    if (passIsTrue) {
      createToken(res, user);
      res.json({ data: user });
    }
    else res.status(403).json({ msg: "username or password not found" });
  } catch (error) {
    console.log("login error massege: ", error);
    res.status(500).send({ msg: error });
  }
}

export async function signup(req, res) {
  try {
    const user = req.body;
    console.log(user);
    user.password = await ReturnHashPassword(user.password);
    console.log(user.password);
    const users = JSON.parse(await getAllUsersDB());
    users.push(user);
    await writeAllUsersDB(users);
    res.json({ msg: "--- √ successfully registered ---" });
  } catch (err) {
    if (err.code === "23505") {
      res.status(406).json({
        msg: "The user name is taken, please choose another user",
      });
      return;
    }
    console.log("add user error massage: ", err);
    res.status(406).json({ msg: err });
  }
}
