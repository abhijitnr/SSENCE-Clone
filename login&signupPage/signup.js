let currentEmail = JSON.parse(localStorage.getItem("currentEmail"));
document.querySelector("#email").value = currentEmail;
document.querySelector("#email").readOnly = true;

let mail = JSON.parse(localStorage.getItem("email"));
document.querySelector("form").addEventListener("submit", uData);
function uData() {
    event.preventDefault();
    let pass = document.querySelector("#password").value;
    for (let i = 0; i < mail.length; i++) {
        if (currentEmail === mail[i].email && mail[i].pass === undefined) {
            mail[i].pass = pass;
            break;
        }
    }
    localStorage.setItem("email", JSON.stringify(mail));
}