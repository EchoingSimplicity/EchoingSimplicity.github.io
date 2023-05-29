var frmvalidator = new Validator("myform");
        frmvalidator.EnableOnPageErrorDisplay();
        frmvalidator.EnableMsgsTogether();
        frmvalidator.addValidation("FirstName", "req", "Please enter your First Name");
        frmvalidator.addValidation("FirstName", "alpha", "Must be alphabetic");
        frmvalidator.addValidation("FirstName", "maxlen=20", "Max length for FirstName is 20");
        frmvalidator.addValidation("Email", "req", "Email is required");
        frmvalidator.addValidation("Email", "email", "This is not a valid email");
        frmvalidator.addValidation("LastName", "req", "Last name is required");
        frmvalidator.addValidation("LastName", "maxlen=50");
        frmvalidator.addValidation("LastName", "alpha", "Must be alphabetic");
        frmvalidator.addValidation("Phone", "req", "Phone is required");
        frmvalidator.addValidation("Phone", "maxlen=15", "Max length for phone is 15");
        frmvalidator.addValidation("Phone", "numeric", "Must be numerical");
        frmvalidator.addValidation("Address", "req", "Address is required");
        frmvalidator.addValidation("Country", "dontselect=000");
        frmvalidator.addValidation("City", "req", "City is required");
        frmvalidator.addValidation("State", "req", "State is required");
        frmvalidator.addValidation("Username", "maxlen=12", "Username cannot be more than twelve characters");
        frmvalidator.addValidation("Username", "req", "Username is required");
        frmvalidator.addValidation("Password", "maxlen=7", "Password can be no longer than seven characters");
        frmvalidator.addValidation("Password", "req", "Password is required");
        var dropdown = document.getElementById("Country");
        dropdown.addEventListener("change", function () {
            var country = document.getElementById("Country").value;
            if (country === "004") {
                frmvalidator.addValidation("Zipcode", "req", "Please enter your zipcode");
                frmvalidator.addValidation("Zipcode", "maxlen=5", "Zipcode five digits only");
            }
        });