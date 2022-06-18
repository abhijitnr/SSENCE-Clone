let previewDataFromLs = JSON.parse(localStorage.getItem("wishdata")) || [];

let previewData = JSON.parse(localStorage.getItem("bagdata")) || [];
let subTotal = JSON.parse(localStorage.getItem("priceTotal"));

displayDiv(previewDataFromLs);

function displayDiv(previewDataFromLs){

    previewDataFromLs.forEach(function (el, index) {
        
        let childDiv = document.createElement("div");

        //imgae tag
        let imgTage = document.createElement("img");
        imgTage.setAttribute("src", el.imgUrl);

        let paraDiv = document.createElement("div");
        // enter brand element
        let para1 = document.createElement("p");
        para1.innerText= el.brand
        // enter product name element
        let para2 = document.createElement("p");
        para2.innerText= el.name
        // enter size element
        let para3 = document.createElement("p");
        para3.innerText= "Size : "+el.size;
        //enter price element
        let para4 = document.createElement("p");
        para4.innerText= "$"+el.price+" USD";
        // enter wishlish event listener
        let para5 = document.createElement("p");
        para5.innerText= "ADD TO BAG"

        para5.addEventListener("click",function(){
            addtobag(el,index);
        })
        // enter remove event listner
        let para6 = document.createElement("p");
        para6.innerText= "X Remove"
        para6.addEventListener("click", function () {
            deleteData(index);
        });

        paraDiv.append(para1, para2, para3, para4);
        childDiv.append(imgTage,paraDiv,para5,para6);
        document.querySelector("#container").append(childDiv);
    });
}

//For remove particular index
function deleteData(index) {
    previewDataFromLs.splice(index, 1);
    localStorage.setItem("wishdata", JSON.stringify(previewDataFromLs));
    window.location.reload();
}

//Add to bag from wishlists page
function addtobag(el,index){
    previewData.push(el)
    previewDataFromLs.splice(index, 1);
    localStorage.setItem("wishdata", JSON.stringify(previewDataFromLs));
    localStorage.setItem("bagdata",JSON.stringify(previewData));
    window.location.reload();
}


// document.querySelector("#proceed").addEventListener("click", goToPaymentPage);

// function goToPaymentPage() {
//     window.location.href = "../login&signupPage/checkoutPage.html"
// }

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
    window.location.href = "../cartPage/bag.html"
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.href = "../index.html"
}

//For shiiping item count
let bagData = JSON.parse(localStorage.getItem("bagdata"));
document.querySelector("#countShow").innerText = "("+bagData.length+")";