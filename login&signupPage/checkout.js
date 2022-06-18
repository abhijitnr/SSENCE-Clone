//for payment.html
let shippingArray = [];
document.querySelector("#order").style.display = "grid";
document.querySelector("#order").style.gridTemplateColumns = "0.7fr 2fr"

let fetchData = JSON.parse(localStorage.getItem("bagdata"));
let totalPrice = JSON.parse(localStorage.getItem("priceTotal"));

fetchData.forEach(function (elem, index) {
    let divA = document.createElement("div");
    let itemImage = document.createElement("img");
    itemImage.src = elem.imgUrl;
    itemImage.style.width = "50%";

    let divB = document.createElement("div");
    divB.style.display = "grid";
    divB.style.gridTemplateColumns = "2fr 1fr"

    let name = document.createElement("span")
    let price = document.createElement("span")

    name.innerText = elem.name;
    name.style.color = "gray";
    name.style.fontFamily = "sans-serif";
    name.style.fontSize = "10px";

    price.innerText = "$" + elem.price;
    price.style.color = "gray";
    price.style.fontFamily = "sans-serif";
    price.style.fontSize = "10px";

    divA.append(itemImage);
    divB.append(name, price);
    document.querySelector("#order").append(divA, divB);
})
document.querySelector("#subTotal").style.display = "grid";
document.querySelector("#subTotal").style.gridTemplateColumns = "3fr 1fr";
document.querySelector("#subTotal").style.gridTemplateRows = "1fr 1fr 1fr";

let sTotal = document.createElement("p");
let svalue = document.createElement("p");
sTotal.innerText = "Subtotal";
svalue.innerText = totalPrice;

let tItems = document.createElement("p");
tItems.innerText = "Total Items";
let tItemsValue = document.createElement("p");
tItemsValue.innerText = fetchData.length;


let shTotal = document.createElement("p");
let shvalue = document.createElement("p");
shTotal.innerText = "Shipping total";
shvalue.innerText = "$40.00";

document.querySelector("#subTotal").append(sTotal, svalue, tItems, tItemsValue, shTotal, shvalue);

let oTotal = document.createElement("span");
oTotal.innerText = "Order total(USE)";
oTotal.style.marginRight = "50%"

let oValue = document.createElement("span");
oValue.innerText = "$" + eval(totalPrice + 40);

//this will redirect it to the payment final page
let btn = document.createElement("button");
btn.innerText = "PLACE ORDER";
btn.style.color = "white";
btn.style.padding = "10px";
btn.style.marginTop = "5%";
btn.style.backgroundColor = "black";
btn.style.fontFamily = "sans-serif";
btn.style.width = "100%";
btn.style.cursor = "pointer";

document.querySelector("#placeOrder").append(oTotal, oValue);
document.querySelector("#placeOrder").append(btn);

// to catch the details submitted on the page-->
btn.addEventListener("click", toOTP);

function toOTP() {
    let shippingDetails = {
        name: document.querySelector("#firstName").value + " " + document.querySelector("#lastName").value,
        strAddress: document.querySelector("#address").value,
        company: document.querySelector("#company").value,
        city: document.querySelector("#city").value,
        zipCode: document.querySelector("#zipCode").value,
        country: document.querySelector("#country").value,
        state: document.querySelector("#state").value,
        phone: document.querySelector("#phoneNumber").value,
        card: document.querySelector("#cNumber").value,
        month: document.querySelector("#month").value
    }
    shippingArray.push(shippingDetails);
    localStorage.setItem("shippingDetails", JSON.stringify(shippingArray));
    window.location.replace("otp.html");
}
// javascript functionalaty

// EventListener for menswear
document.querySelector("#mens").addEventListener("click", mensFunction);
function mensFunction(){
    window.location.href = "../menswear/menswear.html"
}

// EventListener for womenswear
document.querySelector("#womens").addEventListener("click", womensFunction);
function womensFunction(){
    window.location.href = "../womenswear/womenswear.html"
}

// EventListener for everythingelse
document.querySelector("#else").addEventListener("click", elseFunction);
function elseFunction(){
    window.location.href = "../everythingelse/every.html"
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
    window.location.href = "../cartPage/bag.html"
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.href = "../homePage/index.html"
}

let previewDataFromLs = JSON.parse(localStorage.getItem("bagdata"))
document.querySelector("#countShow").innerText = "("+previewDataFromLs.length+")";