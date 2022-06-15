let mail = JSON.parse(localStorage.getItem("email"));
let currentEmail = JSON.parse(localStorage.getItem("currentEmail"));
document.querySelector("#email").value = currentEmail;
document.querySelector("#email").readOnly = true;
let flag = false;

document.querySelector("form").addEventListener("submit", valData);
function valData() {
    event.preventDefault();
    let pass = document.querySelector("#password").value;
    for (let i = 0; i < mail.length; i++) {
        if (currentEmail === mail[i].email && pass === mail[i].pass) {
            flag = true;
            break;
            //got the the homepage with the account logged in already, 
            // will add the same once the homepage is linked with all the pages
        }
    }
    if (flag) alert("Sign In success!");
    else {
        alert("Please enter the correct user id and password");
        document.querySelector("#password").value = "";
    }
}