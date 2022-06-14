document.querySelector("form").addEventListener("submit", chkMail);

function chkMail() {
    let email = document.querySelector("#email").value;
    localStorage.setItem("email", JSON.stringify(email));
}