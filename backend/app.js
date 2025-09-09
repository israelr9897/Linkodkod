import express from "express";
import { config } from "dotenv";
import cors from "cors";
import configRouter from "./routs/configRouts.js";
config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"))

app.use("/", (req, res, next) => {
  console.log(req.url);
    console.log(req.method);
    next()
})

configRouter(app)

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
});
