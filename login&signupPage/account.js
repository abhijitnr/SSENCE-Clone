document.querySelector("form").addEventListener("submit",accountDetails);
let accDet = [];

function accountDetails(){
    event.preventDefault();
    let acdetails = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        email: document.querySelector("#email").value,
        oldPassword: document.querySelector("#oldPassword").value,
        newPassword: document.querySelector("#newPassword").value
    };
    accDet.push(acdetails);
    localStorage.setItem("accountUpdated", JSON.stringify(accDet));
}