const HTML = require("../html/AccountConfirmationEmail.html");
const transporter = require("../utils/mailer");
const jwt = require("jsonwebtoken");
const Users = require("../models/users.models");
const HTMLSEndConfirm = require("../html/SendAccounComfirmation.html");
require("dotenv").config();


const SendConfirmationPage = async (req, res)  =>{
    const id = req.params;
    
    try {
        const result =  HTMLSEndConfirm(id);

        res.send(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

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

const VerifyVerificationToken = async (req, res, next) => {
    const {token, userId} = req.body

    jwt.verify(token, process.env.JWT_SECRET, {algorithms: "HS512"}, async (error, decode) => {
        if(error) {
          res.status(400).json(error);
          
        }else {
          await Users.update({isConfirmed: true}, {where: {id: userId}});
          res.json({message: "confirm"});
          next();
        }
      });
};



module.exports = {
    AccountConfirmationEmail,
    VerifyVerificationToken,
    SendConfirmationPage
};
