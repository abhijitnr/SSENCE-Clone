let previewarr=JSON.parse(localStorage.getItem("everyInfo"));

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
      id.innerText=`221607M71800${elem.id}`

      div1.append(brand,name,id);

        // middle part

        let div2=document.createElement("div");
        let avatar=document.createElement("img");
        avatar.src=elem.imgUrl;
        div2.append(avatar);
        document.querySelector("#box2").append(div2);

        //right side part
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

    })
   
}

function addtobag(elem,fit){
    if(elem["size"]==undefined){
        elem["size"]=fit;
    }else{
        elem.size = fit;
    }
    previewdata.push(elem)
    localStorage.setItem("bagdata",JSON.stringify(previewdata));
}

function addtowish(elem,fit){
    if(elem["size"]==undefined){
        elem["size"]=fit;
    }else{
        elem.size = fit;
    }
    previewdata2.push(elem)
    localStorage.setItem("wishdata",JSON.stringify(previewdata2));
}
