const { event } = require("jquery");
const { format } = require("morgan");

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    if (document.title == "Contact") {
        let sendButton = document.getElementById("submit");
        let form = document.forms[0];

        sendButton.addEventListener("click", (event) => {
            event.preventDefault();

            let fullName = document.getElementById("fullName").Value;
            let contactNumber = document.getElementById("contactNumber").Value;
            let email = document.getElementById("email").Value;
            let message = document.getElementById("message").Value;

            console.info(`Full name: ${fullName}
            Contact Number: ${contactNumber}
            Email: ${email}
            Message: ${message}`);

            form.reset();
        });
    }


    window.addEventListener("load", Start);

})();