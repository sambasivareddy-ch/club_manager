import express from "express";
import clubModel from "../models/club-model.js";
import userModel from "../models/user-model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, isAdmin, isManager, club, userType, email, password } =
    req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    res.status(409).json({
      status: 409,
      message: "User Already Exists",
    });
  } else {
    await userModel
      .create({
        username,
        isAdmin,
        isManager,
        club,
        userType,
        email,
        password,
      })
      .catch((err) => {
        res.json({ status: 424, message: "Adding of User Failed" });
      });
    await clubModel
      .findByIdAndUpdate(club, {
        $push: {
          members: await userModel.findOne({ email }),
        },
      })
      .then((succ) => {
        res.json({
          status: 201,
          message: "A New Member Added",
        });
      })
      .catch((err) => {
        res.json({
          status: 401,
          message: "An Error Occurred",
        });
      });
  }
});

export default router;
