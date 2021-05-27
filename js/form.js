//contact form input validate
function validateforminput() {
    var name = document.forms['contact_form']['name'].value;
    if (name == "" || name == null) {

        document.getElementById('nameerror').innerHTML = "Please fil the name field"
        document.getElementById('nameerror').style.color = "red";

        return false;
    } else {
        document.getElementById('nameerror').innerHTML = "";
    }

    var email = document.forms['contact_form']['email'].value;
    if (email == "" || email == null) {

        document.getElementById('emailerror').innerHTML = "Please fil the Email field"
        document.getElementById('emailerror').style.color = "red";
        return false;
    } else {
        document.getElementById('emailerror').innerHTML = ""
    }

    var subject = document.forms['contact_form']['subject'].value;
    if (subject == "" || subject == null) {

        document.getElementById('subjecterror').innerHTML = "Please fil the Subject field"
        document.getElementById('subjecterror').style.color = "red";
        return false;
    } else {
        document.getElementById('subjecterror').innerHTML = ""
    }

    var message = document.forms['contact_form']['message'].value;
    if (message == "" || message == null) {
        document.getElementById('messageerror').innerHTML = "Please fil the Message field"
        document.getElementById('messageerror').style.color = "red";
        return false;
    } else {
        document.getElementById('messageerror').innerHTML = ""
    }

}
//##########################################################
//log in & log up forms
//##########################################################
//Log in  form input validate
function loginvalidate() {
    var name = document.forms['loginform']['name'].value;
    if (name == "" || name == null) {

        document.getElementById('nameerror').innerHTML = "Please fil the name field"
        document.getElementById('nameerror').style.color = "red";

        return false;
    } else {
        document.getElementById('nameerror').innerHTML = "";
    }


    var email = document.forms['loginform']['email'].value;
    if (email == "" || email == null) {

        document.getElementById('emailerror').innerHTML = "Please fil the email field"
        document.getElementById('emailerror').style.color = "red";

        return false;
    } else {
        document.getElementById('emailerror').innerHTML = "";
    }


}
//Log up  form input validate
function logupvalidate() {
    var name = document.forms['logupform']['name'].value;
    if (name == "" || name == null) {

        document.getElementById('nameerror1').innerHTML = "Please fil the name field"
        document.getElementById('nameerror1').style.color = "red";

        return false;
    } else {
        document.getElementById('nameerror1').innerHTML = "";
    }


    var email = document.forms['logupform']['email'].value;
    if (email == "" || email == null) {

        document.getElementById('emailerror1').innerHTML = "Please fil the Email field"
        document.getElementById('emailerror1').style.color = "red";

        return false;
    } else {
        document.getElementById('emailerror1').innerHTML = "";
    }

    var password = document.forms['logupform']['password'].value;
    if (password == "" || password == null) {

        document.getElementById('passerror1').innerHTML = "Please fil the password field"
        document.getElementById('passerror1').style.color = "red";

        return false;
    } else {
        document.getElementById('passerror1').innerHTML = "";
    }


    var passwordconfirm = document.forms['logupform']['passwordconfirm'].value;
    if (passwordconfirm == "" || passwordconfirm == null) {

        document.getElementById('passerrorconfirm1').innerHTML = "Please fil the password confirm field"
        document.getElementById('passerrorconfirm1').style.color = "red";
        return false;
    } else {
        document.getElementById('passerrorconfirm1').innerHTML = "";

    }

    if (password != passwordconfirm) {
        alert("The Two Passwords Don't Match");
        return false;
    }

    /*  if ((passwordconfirm != password) && password == "") {
        document.getElementById('passerrorconfirm1').innerHTML = "Passwords don't match"
        document.getElementById('passerrorconfirm1').style.color = "red";
        return false;
    } else {
        document.getElementById('passerrorconfirm1').innerHTML = "";
    }
    */



}