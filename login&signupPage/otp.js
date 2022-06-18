//from payment page to top page-->
let fetchDetails = JSON.parse(localStorage.getItem("shippingDetails"));


let carNumber = "1230";
if (carNumber == fetchDetails[0].card) {
    alert("Please enter the OTP: 1234 to confirm your order ");
}
else {
    alert("Card details are invalid. Please check again.");
    window.location.replace("payment.html");
}

//otp page work-->
document.querySelector("form").addEventListener("submit", finalOutput);


function finalOutput() {
    event.preventDefault();
    let otp = document.querySelector("#otp").value;
    if (otp == "1234") alert("Order placed successfully, it will be delivered to your within 7-10 busines days.");
    else alert("Invalid OTP, please enter the correct OTP!");
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