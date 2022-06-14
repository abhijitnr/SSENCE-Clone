document.querySelector("form").addEventListener("submit", chkMail);

let mail = JSON.parse(localStorage.getItem("email")) || [];
let flag = false;

function chkMail() {
    event.preventDefault();
    let userData = {
        email :document.querySelector("#email").value
    }
    mail.push(userData);
    localStorage.setItem("email", JSON.stringify(mail));
    
    // console.log(mail[0].email)
    for(let i = 0; i < mail.length; i++) {
        if(userData.email === mail[i].email) {
            flag = true;
            break;
        }
    }
    if(flag) window.location.replace("signin.html");
    else window.location.replace("signup.html");
}