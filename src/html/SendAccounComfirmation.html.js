const jwt = require("jsonwebtoken");
require("dotenv").config();

const HTMLSEndConfirm =  (token) => {
    
    // return "<h1> Hola </h1>"
    
    return (
        `
        
            
<body>
    <div class="container">
        <div class="message" >
            <h2>Confirm your account</h2>
            <p>
                Only one step is left to confirm your account
            </p>
            <button class="updateComfirm" onclick="updateComfirm()">click</button>
        </div>
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
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        flex-direction: column;
    }

    .container div {
        width: 20vw;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        gap: 5vw;
        flex-direction: column;
        background-color: rgba(17, 0, 255, 0.185);
        backdrop-filter: blur(3%);
        padding: 40px;
        border-radius: 30px;
        box-shadow: 0 0 40px 30px black;
        transition: box-shadow 2s;
    }

    
    @media (max-width: 500px) {
        .container .message {
            width: 70%;
            height: 20vh;
        }
    }

    .container div:hover {
        box-shadow: 0 0 60px 30px rgba(0, 0, 0, 0.603);
    }

    .updateComfirm {
        background-color: black;
        padding: 10px;
        border-radius: 10px;
    }

    
</style>

<script>
        
    const updateComfirm = () => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "${process.env.URL}/auth/confirm"); /// cambiar o borrar el  :8000
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
            const body = JSON.stringify({
                token: '${token}'
            });
            xhr.onload = () => {
                var data = JSON.parse(xhr.responseText);
                if (xhr.readyState == 4 && xhr.status == "200") {
                    console.log(data);
                    const container = document.querySelector(".message");
                    container.innerHTML = "<h1> Account confirmed </h1>"
                    container.style = "height: 40vh"
                } else {
                    console.log(data);
                }
            };
            xhr.send(body);
 
    };
 
</script>
        
        
        `
    );
};

module.exports = HTMLSEndConfirm;