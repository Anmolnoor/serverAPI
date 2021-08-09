import express from "express";
import Profile from "./profile.js";
import Signin from "./signin.js";
import Signup from "./singup.js";
import { UpLoad, upload, UpLoadM } from "./upload.js";

const app = express.Router();

app.post("/signin", Signin);

app.post("/signup", Signup);

app.get("/profile", Profile);

app.post("/upload", upload.single("image"), UpLoad);

app.post("/uploadmulti", upload.array("images", 3), UpLoadM);

export default app;
