const formy = document.getElementById("ContactForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const email = document.getElementById("Email");

var bool = false;
var bool1 = "hi";

var frmvalidator = new Validator("ContactForm");
frmvalidator.EnableOnPageErrorDisplay();
frmvalidator.EnableMsgsTogether();
frmvalidator.addValidation("Name", "req", "Please enter your name.");
frmvalidator.addValidation("Email", "req", "Please enter your email.");
frmvalidator.addValidation("Comment", "req", "Please enter your comment.");
frmvalidator.setAddnlValidationFunction(DoCustomValidation);

function DoCustomValidation() {
    var frm = document.forms["ContactForm"];
    if ((frm.Name.value != "") && (frm.Email.value != "") && (frm.Comment.value != "")) {
        bool = true;
    }
    else {
        bool = false;
    }
}

const textInputs = document.getElementsByClassName("textinput");
for (let i = 0; i < textInputs.length; i++) {
    textInputs[i].addEventListener("change", (event) => {
        DoCustomValidation();
    });
}

formy.addEventListener("submit", (event) => {
    event.preventDefault();
    DoCustomValidation();
    if (bool == true) {
        formy.style.display = "none";
        thankYouMessage.style.display = "block";
    }
});