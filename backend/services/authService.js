import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { config } from "dotenv";
config()

//מקודד סיסמא
export function ReturnHashPassword(pass) {
  if(!pass) return false;
  return bcrypt.hash(pass, 10);
}

//בודק אם הסיסמא נכונה
export async function returnIsPassword(pass, hashPass) {
  if(!pass || !hashPass) return false
  return await bcrypt.compare(pass, hashPass);
}

export function createToken(user) {
  if(!user) return ""
  const token = jwt.sign(
    {
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
}
