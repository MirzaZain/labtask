var passwordOne = document.getElementById("password1").value;
var passwordTwo = document.getElementById("password2").value ;
function enterName() {
    if (document.getElementById("name").value.length === 0) {
        document.getElementById("name").style.border = '1px solid red'
        document.getElementById("name1").innerHTML = "! Please Enter Your Name"
    }
}
function reEnter() {
    document.getElementById("name").style.border = '1px solid grey'
    document.getElementById("name1").innerHTML = ""
}
function enterEmail() {
    if (document.getElementById("email").value.length === 0) {
        document.getElementById("email").style.border = '1px solid red'
        document.getElementById("mail1").innerHTML = "! Please Enter Your email id"
    }
}
function reEnterMail() {
    document.getElementById("email").style.border = '1px solid grey'
    document.getElementById("mail1").innerHTML = ""
}
function enterMail() {
    if (document.getElementById("city").value.length === 0) {
        document.getElementById("city").style.border = '1px solid red'
        document.getElementById("city1").innerHTML = "! Please Enter Your Name"
    }
}
function reEnterCity() {
    document.getElementById("city").style.border = '1px solid grey'
    document.getElementById("city1").innerHTML = ""
}
function passwordAreaOne() {
    if (document.getElementById("password1").value.length === 0) {
        document.getElementById("password1").style.border = '1px solid red'
        document.getElementById("password4").innerHTML = "! Please Enter Your password"
    }
}
function rePassword() {
    document.getElementById("password1").style.border = '1px solid grey'
    document.getElementById("password4").innerHTML = ""
}
function passwordArea() {
    if (document.getElementById("password2").value.length === 0) {
        document.getElementById("password2").style.border = '1px solid red'
        document.getElementById("password3").innerHTML = "! Please Enter Your Password"
    }
}
function reConfirm() {
    document.getElementById("password2").style.border = '1px solid grey'
    document.getElementById("password3").innerHTML = ""
}

function formHandler() {
if (passwordOne !== password2) {
    document.getElementById("password4").innerHTML = "!  Your password is not match"
    document.getElementById("password3").innerHTML = "!  Your Password is not match"
}
}


