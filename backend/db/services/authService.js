import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

export function ReturnHashPassword(pass) {
  return bcrypt.hash(pass, 10);
}

export async function returnIsPassword(pass, hashPass) {
  return await bcrypt.compare(pass, hashPass);
}

export function createToken(res, user) {
  const token = jwt.sign(
    {
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.cookie("authToken", token, { httpOnly: true });
  return token;
}
