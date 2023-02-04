const jwt = require("jsonwebtoken");
require("dotenv").config();

const HTML =  (data) => {

    return (
        `
            
        <body>
            <div class="container">
                <h2>Confirm your account</h2>
                <p>This is only a message for user confirmation please click on the link to confirm, this token will expire,
                    you can request another on the page
                </p>
                <a href="${process.env.URL}/auth/getConfirm/${data.id}"  target="_blank">
                    click to confirm
                </a>
            </div>
        </body>

        <style>
            * {
                color: aliceblue;
                padding: 0;
                margin: 0;
            }
        
            body {
                background-color: rgba(0, 0, 0, 0.809)
            }
        
            .container {
                height: 100vh;
                display: flex;
                justify-content: center;
                justify-items: center;
                align-items: center;
                gap: 5vw;
                flex-direction: column;
            }
        
            .updateComfirm {
                background-color: black;
                padding: 10px;
                border-radius: 10px;
            }
        </style>
        `
    );
};

module.exports = HTML