// EventListener for MensWear
document.querySelector("#men").addEventListener("click", mensFunction);
document.querySelector("#menBotton1").addEventListener("click", mensFunction);
document.querySelector("#menBotton2").addEventListener("click", mensFunction);
document.querySelector("#mens").addEventListener("click", mensFunction);
function mensFunction(){
    window.location.href = "./menswear/menswear.html"
}

// EventListener for WomensWear
document.querySelector("#women").addEventListener("click", womensFunction);
document.querySelector("#womenBotton1").addEventListener("click", womensFunction);
document.querySelector("#womenBotton2").addEventListener("click", womensFunction);
document.querySelector("#womens").addEventListener("click", womensFunction);
function womensFunction(){
    window.location.href = "./womenswear/womenswear.html"
}

// EventListener for everythingelse
document.querySelector("#else").addEventListener("click", elseFunction);
function elseFunction(){
    window.location.href = "./everythingelse/every.html"
}

// EventListener for wishlists
document.querySelector("#wish").addEventListener("click", wishFunction);
function wishFunction(){
    window.location.href = "./wishPage/wish.html"
}

// EventListener for search button
document.querySelector("#search").addEventListener("click", searchFunction);
function searchFunction(){
    window.location.href = ""
}

//event listener for account check input when big screen

document.querySelector("#bigScreen").addEventListener("click", chkAccount);

function chkAccount(){
    let currentEmail = JSON.parse(localStorage.getItem("currentEmail")) || "";
    console.log(currentEmail);
    if(currentEmail == "") {
        window.location.replace("./login&SignupPage/login.html");
    }
    else {
        window.location.replace("./login&SignupPage/accountDetails.html");
    }
}


// EventListener for accountLogo
document.querySelector("#accountLogo").addEventListener("click", accountFunction);
function accountFunction(){
    let currentEmail = JSON.parse(localStorage.getItem("currentEmail")) || "";
    // console.log(currentEmail);
    if(currentEmail == "") {
        window.location.replace("./login&SignupPage/login.html");
    }
    else {
        window.location.replace("./login&SignupPage/accountDetails.html");
    }
}

// EventListener for shopping bag
document.querySelector("#shoppingLogo").addEventListener("click", shoppingFunction);
function shoppingFunction(){
    window.location.href = "./cartPage/bag.html"
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.replace("index.html");
}

// for showing the count
let previewDataFromLs = JSON.parse(localStorage.getItem("bagdata"))
if(previewDataFromLs == null) {
    previewDataFromLs = [];
}
document.querySelector("#countShow").innerText = "("+previewDataFromLs.length+")";