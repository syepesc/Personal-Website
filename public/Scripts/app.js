// const { event } = require("jquery");
// const { format } = require("morgan");

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    if (document.title == "Contact") {
        let sendButton = document.getElementById("submit");

        sendButton.addEventListener("click", (event) => {
            event.preventDefault();

            let fullName = document.getElementById("fullName").value;
            let contactNumber = document.getElementById("contactNumber").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            console.info(`Full name: ${fullName}\nContact Number: ${contactNumber}\nEmail: ${email}\nMessage: ${message}`);

            document.getElementById("contactForm").reset();
        });
    }


    window.addEventListener("load", Start);

})();