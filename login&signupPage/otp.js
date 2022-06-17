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

