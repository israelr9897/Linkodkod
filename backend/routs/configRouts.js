import { verifyToken } from "../middelware/verifyToken.js";
import RouterPosts from "./postsRouter.js";
import RouterAuth from "./authRouts.js";

export default function configRouter(app) {

  //בקשות הקשורות לכניסה ורישום
  app.use("/auth", RouterAuth);
  
  //בודק שרק מי שיש לו טוקן תקין יכול לגשת לנתוני האתר
  app.use(verifyToken);
  
  
  //בקשות הקשורות לפוסטים
  app.use("/posts", RouterPosts);

  //route not find
  app.use((req, res) => {
    res.status(404).json({ msg: "Route not find" });
  });
}
