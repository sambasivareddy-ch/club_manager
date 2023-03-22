import nodemailer from "nodemailer";

const getEmailTransporter = async () => {
    const emailAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: emailAccount.user, // generated ethereal user
            pass: emailAccount.pass, // generated ethereal password
        },
    })

    return transporter
}

export default getEmailTransporter;