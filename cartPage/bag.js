let previewDataFromLs = JSON.parse(localStorage.getItem("bagdata")) || [];

let wishDatafromLs = JSON.parse(localStorage.getItem("wishdata")) || [];

let subTotal = JSON.parse(localStorage.getItem("priceTotal"));

displayDiv(previewDataFromLs);

function displayDiv(previewDataFromLs){

    let totalPrice = 0;
    previewDataFromLs.forEach(function (el, index) {
        
        let childDiv = document.createElement("div");

        let  div1 = document.createElement("div");
        let imgTage = document.createElement("img");
        imgTage.setAttribute("src", el.imgUrl);
        
        let boxOfDiv1 = document.createElement("div");
        // enter brand element
        let para1 = document.createElement("p");
        para1.innerText= el.brand
        // enter product name element
        let para2 = document.createElement("p");
        para2.innerText= el.name
        // enter size element
        let para3 = document.createElement("p");
        para3.innerText= "Size : "+el.size;
        // enter wishlish event listener
        let para4 = document.createElement("p");
        para4.innerText= "Move to Wishlist";
        para4.addEventListener("click", function () {
           moveToWishlist(el,index);
        });

        boxOfDiv1.append(para1, para2, para3, para4);
        div1.append(imgTage, boxOfDiv1);

        let  div2 = document.createElement("div");
        // enter price element
        let para5 = document.createElement("p");
        para5.innerText= "$"+el.price+" USD";
        // enter remove event listner
        let para6 = document.createElement("p");
        para6.innerText= "Remove"
        para6.addEventListener("click", function () {
            deleteData(index);
        });
           

        div2.append(para5, para6)

        childDiv.append(div1,div2)
        document.querySelector("#appendItem").append(childDiv);


        //For Total Price
        totalPrice += +el.price;
        localStorage.setItem("priceTotal", JSON.stringify(totalPrice))
        document.querySelector("#priceAppend").innerText = "$"+totalPrice+" USD";
        document.querySelector("#finalPrice").innerText = "$"+totalPrice+" USD";

        document.querySelector("#countShow").innerText = "("+previewDataFromLs.length+")";
    });
}

//For remove particular index
function deleteData(index) {
    previewDataFromLs.splice(index, 1);
    localStorage.setItem("bagdata", JSON.stringify(previewDataFromLs));
    window.location.reload();
}

//move to item from bag to wish list

function moveToWishlist(el,index){
    previewDataFromLs.splice(index, 1);
    localStorage.setItem("bagdata", JSON.stringify(previewDataFromLs));
    wishDatafromLs.push(el);
    localStorage.setItem("wishdata", JSON.stringify(wishDatafromLs));
    window.location.reload();
}


document.querySelector("#proceed").addEventListener("click", goToPaymentPage);

function goToPaymentPage() {
    window.location.href = "../login&signupPage/checkoutPage.html"
}
let currentEmail = JSON.parse(localStorage.getItem("currentEmail"));
document.querySelector("#email").innerText = currentEmail;

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
    window.location.href = "../login&signupPage/accountDetails.html"
}

// EventListener for shopping bag
document.querySelector("#shoppingLogo").addEventListener("click", shoppingFunction);
function shoppingFunction(){
    window.location.href = "bag.html"
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.href = "../index.html"
}