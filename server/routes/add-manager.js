import express from "express";

import clubModel from "../models/club-model.js";
import userModel from "../models/user-model.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
    const { clubId, managerEmail, managerName } = req.body;
    let isManagerAdded = false;

    const chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    let password = "";
    for (let i = 0; i < 10; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.email, // generated ethereal user
            pass: process.env.emailPassword, // generated ethereal password
        },
    });

    try {
        const user = await userModel.findOne({ email: managerEmail });
        
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
                password: password,
            };
            await userModel.create(newUser).catch((err) => {
                res.json({
                    status: 401,
                    message: "Manager Creation Failed",
                });
            });
        }
        
        const manager = await userModel.findOne({ email: managerEmail });
        const club = await clubModel.findById(clubId);
        
        if (manager) {
            await transporter
                .sendMail({
                    from: process.env.email, // sender address
                    to: managerEmail, // list of receivers
                    subject: "Hola! You are added as a manager to a club", // Subject line
                    html: `
                      <html>
                        <head>
                          <style>
                            div {
                              width: 100%;
                              font-size: 14px;
                            }
                            h2 {
                              letter-spacing: 1px;
                            }
                          </style>
                        </head>
                        <body>
                          <h2>Greeting from ClubManager!</h2>
                          <div>
                            <p>Hello ${manager.username}, you are added as a 
                            manager for the club ${club.clubName}</p>  
                            <p class="passsword">Your password to access the club: ${manager.password}</p>
                          </div>
                        </body>
                      </html>
                    `, // html body
                })
                .catch((err) => console.log("An Error Occurred", err));
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
    } catch(err) {
        console.log('Error occurred', err);
        res.json({
            status: 400,
            err: err,
        })
    }

});

export default router;
