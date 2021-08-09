import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import https from "https";
import fs from "fs";

import Route from "./Routes/Routes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://AnmolNoor:anmolnoor@testapp.htmya.mongodb.net/testApp";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    // https
    //   .createServer(
    //     {
    //       key: fs.readFileSync("./key.pem"),
    //       cert: fs.readFileSync("./cert.pem"),
    //       passphrase: "anmolnoor",
    //     },
    //     app
    //   )
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

app.use("/", Route);

app.get("/", (req, res) => {
  res.send("This is Working...");
});
