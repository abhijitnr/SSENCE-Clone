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
// javascript functionalaty

// EventListener for womenswear
document.querySelector("#mens").addEventListener("click", mensFunction);
function mensFunction(){
    window.location.href = "../menswear/menswear.html";
}

// EventListener for womenswear
document.querySelector("#womens").addEventListener("click", womensFunction);
function womensFunction(){
    window.location.href = "../womenswear/womenswear.html";
}

// EventListener for everythingelse
document.querySelector("#else").addEventListener("click", elseFunction);
function elseFunction(){
    window.location.href = "../everythingelse/every.html";
}

// EventListener for wishlists
document.querySelector("#wish").addEventListener("click", wishFunction);
function wishFunction(){
    window.location.href = "../wishPage/wish.html"
}

// EventListener for search button
document.querySelector("#search").addEventListener("click", searchFunction);
function searchFunction(){
    window.location.href = ""
}

// EventListener for accountLogo
document.querySelector("#accountLogo").addEventListener("click", accountFunction);
function accountFunction(){
    window.location.href = "accountDetails.html"
}

// EventListener for shopping bag
document.querySelector("#shoppingLogo").addEventListener("click", shoppingFunction);
function shoppingFunction(){
    window.location.href = "../cartPage/bag.html";
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.href = "../index.html";
}

let previewDataFromLs = JSON.parse(localStorage.getItem("bagdata"))
document.querySelector("#countShow").innerText = "("+previewDataFromLs.length+")";