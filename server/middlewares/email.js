import nodemailer from "nodemailer";

const getEmailTransporter = async () => {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 465,
        secure: true,
        auth: {
            user: process.env.email, // generated ethereal user
            pass: process.env.emailPassword, // generated ethereal password
        },
    })

    return transporter
}

export default getEmailTransporter;