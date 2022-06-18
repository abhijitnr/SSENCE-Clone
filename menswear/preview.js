let previewarr=JSON.parse(localStorage.getItem("mensInfo"));

let previewdata=JSON.parse(localStorage.getItem("bagdata")) || [];
let previewdata2=JSON.parse(localStorage.getItem("wishdata")) || [];

display(previewarr);

function display(previewarr){
    previewarr.forEach(function(elem){

        // left side part
      let div1=document.createElement("div");
      document.querySelector("#box1").append(div1);

      let brand=document.createElement("h1");
      brand.innerText=elem.brand;

      let name=document.createElement("h2");
      name.innerText=elem.name;

      let id=document.createElement("p");
      id.innerText=`222887F09100${elem.id}`

      div1.append(brand,name,id);

        // middle part

        let div2=document.createElement("div");
        let avatar=document.createElement("img");
        avatar.src=elem.imgUrl;
        div2.append(avatar);
        document.querySelector("#box2").append(div2);

        //right side part
        if(elem.tag=="clothing"){
        let div3=document.createElement("div");
        document.querySelector("#box3").append(div3);

        let price=document.createElement("h3");
        price.innerText=`$${elem.price} USD`;

        let select=document.createElement("select");
        select.setAttribute("id","size");
        select.setAttribute("label","SELECT SIZE");
        // select.innerText="SELECT SIZE";
        let opt1=document.createElement("option");
        opt1.innerText="SELECT SIZE";
        let opt2=document.createElement("option");
        opt2.innerText="XXS";
        let opt3=document.createElement("option");
        opt3.innerText="XS";
        let opt4=document.createElement("option");
        opt4.innerText="S";
        let opt5=document.createElement("option");
        opt5.innerText="M";
        let opt6=document.createElement("option");
        opt6.innerText="L";
        let opt7=document.createElement("option");
        opt7.innerText="XL";
        let opt8=document.createElement("option");
        opt8.innerText="XXL";
        let opt9=document.createElement("option");
        opt9.innerText="XXXL";
        select.append(opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8,opt9);

        let btn1=document.createElement("button");
        btn1.innerText="ADD TO BAG";
        btn1.setAttribute("id","btn1");
        btn1.addEventListener("click",function(){
            let fit=document.querySelector("#size").value;
            addtobag(elem,fit);
        })

        let btn2=document.createElement("button");
        btn2.innerText="ADD TO WISHLIST";
        btn2.setAttribute("id","btn2");
        btn2.addEventListener("click",function(){
            let fit=document.querySelector("#size").value;
            addtowish(elem,fit);
        })

        let div5=document.createElement("div");
        div5.append(btn1,btn2);

        let div6=document.createElement("div");
        div6.setAttribute("id","fitpredictor");
        let image=document.createElement("img");
        image.setAttribute("id","logopng")
        image.src="https://images.squarespace-cdn.com/content/v1/54e3cdb3e4b0b56fcc45e9e2/1458176028392-UUPHVWHWQKX88UXLG2RO/F+STOP+CAMERAS.jpg?format=300w";

        let fitp=document.createElement("p");
        fitp.innerText="Fit Predictor";

        let calci=document.createElement("p");
        calci.innerText="Calculate your size";

        div6.append(image,fitp,calci)



        div3.append(price,select,div5,div6)
    }
    else if(elem.tag=="shoes"){

        
        let div3=document.createElement("div");
        document.querySelector("#box3").append(div3);

        let price=document.createElement("h3");
        price.innerText=`$${elem.price} USD`;

        let select=document.createElement("select");
        select.setAttribute("id","size");
        select.setAttribute("label","SELECT SIZE");
        // select.innerText="SELECT SIZE";
        let opt1=document.createElement("option");
        opt1.innerText="SELECT SIZE";
        let opt2=document.createElement("option");
        opt2.innerText="UK 6 = IT 40";
        let opt3=document.createElement("option");
        opt3.innerText="UK 7 = IT 41";
        let opt4=document.createElement("option");
        opt4.innerText="UK 8 = IT 42";
        let opt5=document.createElement("option");
        opt5.innerText="UK 9 = IT 43";
        let opt6=document.createElement("option");
        opt6.innerText="UK 10 = IT 44";
        let opt7=document.createElement("option");
        opt7.innerText="UK 11 = IT 45";
        let opt8=document.createElement("option");
        opt8.innerText="UK 12 = IT 46";
       
        select.append(opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8);

        let btn1=document.createElement("button");
        btn1.innerText="ADD TO BAG";
        btn1.setAttribute("id","btn1");
        btn1.addEventListener("click",function(){
            let fit=document.querySelector("#size").value;
            addtobag(elem,fit);
        })

        let btn2=document.createElement("button");
        btn2.innerText="ADD TO WISHLIST";
        btn2.setAttribute("id","btn2");
        btn2.addEventListener("click",function(){
            let fit=document.querySelector("#size").value;
            addtowish(elem,fit);
        })

        let div5=document.createElement("div");
        div5.append(btn1,btn2);

        let div6=document.createElement("div");
        div6.setAttribute("id","fitpredictor");
        let image=document.createElement("img");
        image.setAttribute("id","logopng")
        image.src="https://images.squarespace-cdn.com/content/v1/54e3cdb3e4b0b56fcc45e9e2/1458176028392-UUPHVWHWQKX88UXLG2RO/F+STOP+CAMERAS.jpg?format=300w";

        let fitp=document.createElement("p");
        fitp.innerText="Fit Predictor";

        let calci=document.createElement("p");
        calci.innerText="Calculate your size";

        div6.append(image,fitp,calci)



        div3.append(price,select,div5,div6)

    }
    else if (elem.tag=="accessories"){

        
        let div3=document.createElement("div");
        document.querySelector("#box3").append(div3);

        let price=document.createElement("h3");
        price.innerText=`$${elem.price} USD`;

      

        let btn1=document.createElement("button");
        btn1.innerText="ADD TO BAG";
        btn1.setAttribute("id","btn1");
        btn1.addEventListener("click",function(){
            let fit=document.querySelector("#size")?.value;
            addtobag(elem,fit);
        })

        let btn2=document.createElement("button");
        btn2.innerText="ADD TO WISHLIST";
        btn2.setAttribute("id","btn2");
        btn2.addEventListener("click",function(){
            let fit=document.querySelector("#size").value;
            addtowish(elem,fit);
        })

        let div5=document.createElement("div");
        div5.append(btn1,btn2);

        div3.append(price,div5);

    }else if(elem.tag=="bag"){
        let div3=document.createElement("div");
        document.querySelector("#box3").append(div3);

        let price=document.createElement("h3");
        price.innerText=`$${elem.price} USD`;

      

        let btn1=document.createElement("button");
        btn1.innerText="ADD TO BAG";
        btn1.setAttribute("id","btn1");
        btn1.addEventListener("click",function(){
            let fit=document.querySelector("#size")?.value;
            addtobag(elem,fit);
        })

        let btn2=document.createElement("button");
        btn2.innerText="ADD TO WISHLIST";
        btn2.setAttribute("id","btn2");
        btn2.addEventListener("click",function(){
            let fit=document.querySelector("#size")?.value;
            addtowish(elem,fit);
        })

        let div5=document.createElement("div");
        div5.append(btn1,btn2);

        div3.append(price,div5);
    }

    })
   
}

function addtobag(elem,fit){
    // console.log(elem,fit)
    if(fit=="SELECT SIZE"){
        alert("Please Select Size");
        window.location.reload();
    }else{
        if(fit == undefined){
            elem["size"]="-";
        }else if(elem["size"]==undefined){
            elem["size"]=fit;
        }else{
            elem.size = fit;
        }
        previewdata.push(elem)
        localStorage.setItem("bagdata",JSON.stringify(previewdata));
        window.location.reload();
    }
  
}

function addtowish(elem,fit){
    if(fit=="SELECT SIZE"){
        alert("Please Select Size");
        window.location.reload();
    }
    else{
    if(fit==undefined){
        elem["size"]="-";
    }else if(elem["size"]==undefined){
        elem["size"]=fit;
    }else{
        elem.size = fit;
    }
    previewdata2.push(elem)
    localStorage.setItem("wishdata",JSON.stringify(previewdata2));
    window.location.reload();
}
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
    window.location.href = "../cartPage/bag.html";
}


// EventListener for brand logo
document.querySelector("#brandLogo").addEventListener("click", brandLogoFunction);
function brandLogoFunction(){
    window.location.href = "../index.html"
}

let previewDataFromLs = JSON.parse(localStorage.getItem("bagdata"))
document.querySelector("#countShow").innerText = "("+previewDataFromLs.length+")";