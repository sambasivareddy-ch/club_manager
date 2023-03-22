import express from "express";

import clubModel from "../models/club-model.js";
import userModel from "../models/user-model.js";
import getEmailTransporter from "../middlewares/email.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { clubId, managerEmail, managerName } = req.body;
  let isManagerAdded = false;

  const user = await userModel.findOne({ email: managerEmail });
  const emailTransporter = await getEmailTransporter();

  if (user) {
    await userModel.findOneAndUpdate(
      { email: managerEmail },
      {
        $set: { club: clubId, isManager: true },
      }
    );
  } else {
    const newUser = {
      username: managerName,
      isAdmin: false,
      isManager: true,
      club: clubId,
      userType: "member",
      email: managerEmail,
      password: "manager@123",
    };
    await userModel.create(newUser).catch((err) => {
      res.json({
        status: 401,
        message: "Manager Creation Failed",
      });
    });
  }

  const manager = await userModel.findOne({ email: managerEmail });

  if (manager) {
    await emailTransporter.sendMail({
      from: 'sambachinta.24@gmail.com', // sender address
      to: managerEmail, // list of receivers
      subject: "Hola! You are added as a manager to a club", // Subject line
      text: `Hello ${manager.username}, you are added as a 
            manager for the club ${await clubModel.findById(clubId).clubName}
            `, // plain text body
      html: `<p>Your password to access the club: ${manager.password}</p>`, // html body
    }).catch((err) => console.log("An Error Occurred"))
  }

  if (manager) {
    await clubModel
      .findByIdAndUpdate(clubId, {
        $set: {
          hadManager: true,
          lead: await userModel.findOne({ email: managerEmail }),
        },
      })
      .then((succ) => {
        res.json({
          status: 200,
          message: "Manager Added",
        });
      })
      .catch((err) => {
        res.json({
          status: 400,
          message: "Error occurred while adding manager",
        });
      });
  }
});

export default router;
