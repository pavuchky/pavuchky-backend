const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const {
    NODEMAILER_EMAIL,
    NODEMAILER_PASSWORD,
    NODEMAILER_HOST,
    NODEMAILER_PORT,
} = process.env;

const config = {
    host: NODEMAILER_HOST,
    port: NODEMAILER_PORT,
    secure: false,
    auth: {
        user: NODEMAILER_EMAIL,
        pass: NODEMAILER_PASSWORD,
    },
};

const transport = nodemailer.createTransport(config);

async function sendEmail({ html, subject, to, attachments }) {

    const email = {
        from: NODEMAILER_EMAIL,
        to,
        subject,
        html,
    };

    if (attachments) {
        email.attachments = attachments;
    }

    try {
        await transport.sendMail(email);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    sendEmail,
};