document.querySelector("form").addEventListener("submit", chkMail);

let mail = JSON.parse(localStorage.getItem("email")) || [];
let flag = false;

function chkMail() {
    let currentEmail = document.querySelector("#email").value;
    localStorage.setItem("currentEmail", JSON.stringify(currentEmail));
    event.preventDefault();
    let userData = {
        email: document.querySelector("#email").value
    }
    
    // console.log(mail[0].email)
    for (let i = 0; i < mail.length; i++) {
        if (currentEmail === mail[i].email) {
            flag = true;
            break;
        }
    }
    mail.push(userData);
    localStorage.setItem("email", JSON.stringify(mail));
    if (flag) window.location.replace("signin.html");
    else window.location.replace("signup.html");
}