import express from "express";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import createAdminRoute from "./routes/create-admin.js";
import managerLoginRoute from "./routes/manager-login.js";
import createClubRoute from "./routes/create-club.js";
import deleteClubRoute from "./routes/delete-club.js";
import getClubsRoute from "./routes/get-clubs.js";
import adminLoginRoute from "./routes/login-admin.js";
import addManagerRoute from "./routes/add-manager.js";
import addUserRoute from "./routes/add-users.js";

config();

const app = express();
const { connect, connection } = mongoose;

app.use(cors());
app.use(express.json());

connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connection.once("connected", () => {
    console.log("DB Connected");
});
connection.on("error", () => {
    console.log("Error Occurred");
});

app.get("/", (req, res) => {
    res.status(200).send("Hello World!!");
});
app.use("/create-admin", createAdminRoute);
app.use("/manager-login", managerLoginRoute);
app.use("/add-manager", addManagerRoute);
app.use("/create-club", createClubRoute);
app.use("/delete-club", deleteClubRoute);
app.use("/get-clubs", getClubsRoute);
app.use("/admin-login", adminLoginRoute);
app.use("/add-user", addUserRoute);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening at Port: ${PORT}`);
});
