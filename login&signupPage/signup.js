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

// javascript functionalaty

// EventListener for womenswear
document.querySelector("#mens").addEventListener("click", mensFunction);
function mensFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for womenswear
document.querySelector("#womens").addEventListener("click", womensFunction);
function womensFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for everythingelse
document.querySelector("#else").addEventListener("click", elseFunction);
function elseFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for wishlists
document.querySelector("#wish").addEventListener("click", wishFunction);
function wishFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for search button
document.querySelector("#search").addEventListener("click", searchFunction);
function searchFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for accountLogo
document.querySelector("#accountLogo").addEventListener("click", accountFunction);
function accountFunction(){
    window.location.href = "https://course.masaischool.com/"
}

// EventListener for shopping bag
document.querySelector("#shoppingLogo").addEventListener("click", shoppingFunction);
function shoppingFunction(){
    window.location.href = "https://course.masaischool.com/"
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.href = "index.html"
}