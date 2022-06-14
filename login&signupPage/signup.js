let mail = JSON.parse(localStorage.getItem("email"));
document.querySelector("form").addEventListener("submit", uData);
function uData() {
    event.preventDefault();
    let pass = document.querySelector("#password").value;
    for(let i = 0;i<mail.length;i++) {
        if(mail[i].pass === undefined){
            mail[i].pass = pass;
            break;
        }
    }
}