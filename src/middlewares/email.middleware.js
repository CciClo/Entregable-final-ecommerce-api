const HTML = require("../html/AccountConfirmationEmail.html");
const transporter = require("../utils/mailer");
require("dotenv").config();


const AccountConfirmationEmail = async (date) => {
    try {
        const result = await transporter.sendMail({
            to: date.email,
            from: process.env.EMAIL,
            subject: "Email confirmation",
            html: HTML(date)
        });

        return result
    } catch (error) {
        throw error
    }
};


module.exports = {
    AccountConfirmationEmail,
};
