// this is all for middle part

let mensData = [
  {
    id: 1,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221249M140004_1/jil-sander-green-cotton-bucket-hat.jpg ",
    brand: "Jil Sander",
    name: "Green Cotton Bucket Hat",
    price: 440,
  },
  {
    id: 2,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221353M191007_1/stussy-black-cotton-trousers.jpg ",
    brand: "Stüssy",
    name: "Black Cotton Trousers",
    price: 145,
  },
  {
    id: 3,
    imgUrl:
      " https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221843M186002_1/032c-blue-destroyed-jeans.jpg",
    brand: "032c",
    name: "Blue Destroyed Jeans",
    price: 370,
  },
  {
    id: 4,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221843M186001_1/032c-blue-the-032c-jeans.jpg ",
    brand: "032c",
    name: "Blue 'The 032c' Jeans",
    price: 210,
  },
  {
    id: 5,
    imgUrl:
      " https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222776M186001_1/alyx-black-blackmeans-edition-jeans.jpg",
    brand: "1017 ALYX 9SM",
    name: "Black Blackmeans Edition Jeans",
    price: 760,
  },
  {
    id: 6,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M195002_1/alexander-mcqueen-white-viscose-blazer.jpg ",
    brand: "Alexander McQueen",
    name: "White Viscose Blazer",
    price: 3245,
  },
  {
    id: 7,
    imgUrl:
      " https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M195001_1/alexander-mcqueen-pink-wool-blazer.jpg",
    brand: "Alexander McQueen",
    name: "Pink Wool Blazer",
    price: 2490,
  },
  {
    id: 8,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M180000_1/alexander-mcqueen-white-workwear-denim-jacket.jpg ",
    brand: "Alexander McQueen",
    name: "White Workwear Denim Jacket",
    price: 1570,
  },
  {
    id: 9,
    imgUrl:
      " https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M180001_1/alexander-mcqueen-black-polyester-jacket.jpg",
    brand: "Alexander McQueen",
    name: "Black Polyester Jacket",
    price: 1100,
  },
  {
    id: 10,
    imgUrl:
      " https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M204000_1/alexander-mcqueen-white-cotton-sweatshirt.jpg",
    brand: "Alexander McQueen",
    name: "White Cotton Sweatshirt",
    price: 590,
  },
  {
    id: 11,
    imgUrl:
      " https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M192009_1/alexander-mcqueen-blue-cotton-shirt.jpg",
    brand: "Alexander McQueen",
    name: "Blue Cotton Shirt",
    price: 1410,
  },
  {
    id: 12,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M192018_1/alexander-mcqueen-blue-graffiti-harness-shirt.jpg ",
    brand: "Alexander McQueen",
    name: "Blue Graffiti Harness Shirt",
    price: 640,
  },
  {
    id: 13,
    imgUrl:
      " https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M192001_1/alexander-mcqueen-white-cotton-shirt.jpg",
    brand: "Alexander McQueen",
    name: "White Cotton Shirt",
    price: 850,
  },
  {
    id: 14,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M186002_1/alexander-mcqueen-white-printed-jeans.jpg",
    brand: "Alexander McQueen",
    name: "White Printed Jeans",
    price: 870,
  },
  {
    id: 15,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M191004_1/alexander-mcqueen-navy-recycled-polyester-cargo-pants.jpg",
    brand: "Alexander McQueen",
    name: "Navy Recycled Polyester Cargo Pants",
    price: 1345,
  },
  {
    id: 16,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222259M193002_1/alexander-mcqueen-navy-selvedge-shorts.jpg",
    brand: "Alexander McQueen",
    name: "Navy Selvedge Shorts",
    price: 590,
  },
  {
    id: 17,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221891M212000_1/a-cold-wall-gray-nylon-polo.jpg",
    brand: "A-COLD-WALL*",
    name: "Gray Nylon Polo",
    price: 355,
  },
  {
    id: 18,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221417M214048_1/dion-lee-navy-harness-back-tank-top.jpg",
    brand: "Dion Lee",
    name: "Navy Harness Back Tank Top",
    price: 265,
  },
  {
    id: 19,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M180006_1/dime-black-hooded-denim-jacket.jpg",
    brand: "Dime",
    name: "Black Hooded Denim Jacket",
    price: 170,
  },
  {
    id: 20,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M180004_1/dime-off-white-and-blue-cotton-jacket.jpg",
    brand: "Dime",
    name: "Off-White & Blue Cotton Jacket",
    price: 155,
  },
  {
    id: 21,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M202012_1/dime-blue-cotton-hoodie.jpg",
    brand: "Dime",
    name: "Blue Cotton Hoodie",
    price: 140,
  },
  {
    id: 22,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M202013_1/dime-gray-cotton-hoodie.jpg",
    brand: "Dime",
    name: "Gray Cotton Hoodie",
    price: 140,
  },
  {
    id: 23,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M202015_1/dime-gray-cotton-hoodie.jpg",
    brand: "Dime",
    name: "Gray Cotton Hoodie",
    price: 140,
  },
  {
    id: 24,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M202017_1/dime-black-bmf-hoodie.jpg",
    brand: "Dime",
    name: "Black BMF Hoodie",
    price: 140,
  },
  {
    id: 25,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M204012_1/dime-gray-cotton-sweatshirt.jpg",
    brand: "Dime",
    name: "Gray Cotton Sweatshirt",
    price: 130,
  },
  {
    id: 26,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M213018_1/dime-green-cotton-long-sleeve-t-shirt.jpg",
    brand: "Dime",
    name: "Green Cotton Long Sleeve T-Shirt",
    price: 100,
  },
  {
    id: 27,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M180005_1/dime-black-cotton-jacket.jpg",
    brand: "Dime",
    name: "Black Cotton Jacket",
    price: 155,
  },
  {
    id: 28,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M192002_1/dime-off-white-cotton-shirt.jpg",
    brand: "Dime",
    name: "Off-White Cotton Shirt",
    price: 140,
  },
  {
    id: 29,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M192003_1/dime-black-cotton-shirt.jpg",
    brand: "Dime",
    name: "Black Cotton Shirt",
    price: 140,
  },
  {
    id: 30,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M213028_1/dime-orange-cotton-t-shirt.jpg",
    brand: "Dime",
    name: "Orange Cotton T-Shirt",
    price: 50,
  },
  {
    id: 31,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.3/222841M188004_1/dime-green-cotton-cargo-pants.jpg",
    brand: "Dime",
    name: "Green Cotton Cargo Pants",
    price: 165,
  },
  {
    id: 32,
    imgUrl:
      "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.3/222841M193005_1/dime-black-and-gray-polyester-shorts.jpg",
    brand: "Dime",
    name: "Black & Gray Polyster Shorts",
    price: 115,
  },
];

display(mensData);

function display(mensData) {

    document.querySelector("#box2").innerHTML="";

  mensData.forEach(function (elem) {
    let box = document.createElement("div");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    let avatar = document.createElement("img");
    avatar.src = elem.imgUrl;
    div1.append(avatar);

    let brand = document.createElement("span");
    brand.innerText = elem.brand;
    brand.setAttribute("class", "text");
    div2.append(brand);

    let name = document.createElement("span");
    name.innerText = elem.name;
    name.setAttribute("class", "text");
    div3.append(name);

    let price = document.createElement("span");
    price.innerText = `$${elem.price}`;
    price.setAttribute("class", "text");
    div4.append(price);

    box.append(div1, div2, div3, div4);
    document.querySelector("#box2").append(box);
  });

  //   this is all for left hand side part

  let leftdiv1 = document.createElement("div");
  let leftdiv2 = document.createElement("div");
  let leftdiv3 = document.createElement("div");

  document.querySelector("#box1").append(leftdiv1, leftdiv2, leftdiv3);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  let label = document.createElement("label");
  label.innerText = "SALE ONLY";

  leftdiv1.append(checkbox, label);

  let h2_1 = document.createElement("h2");
  h2_1.innerText = "ALL CATEGORIES";

  let s1 = document.createElement("span");
  s1.innerText = "ACCESSORIES";

  let s2 = document.createElement("span");
  s2.innerText = "BAGS";

  let s3 = document.createElement("span");
  s3.innerText = "CLOTHING";

  let s4 = document.createElement("span");
  s4.innerText = "SHOES";

  leftdiv2.append(h2_1, s1, s2, s3, s4);

  let h2_2 = document.createElement("h2");
  h2_2.innerText = "ALL DESIGNERS";
  leftdiv3.append(h2_2);

  let leftText = [
    {
      leftText: "032c",
    },
    {
      leftText: "1017 ALYX 9SM",
    },
    {
      leftText: "11 by Boris Bidjan Saberi",
    },
    {
      leftText: "132 5. ISSEY MIYAKE",
    },
    {
      leftText: "3.1 Phillip Lim",
    },
    {
      leftText: "3MAN",
    },
    {
      leftText: 424,
    },
    {
      leftText: "44 Label Group",
    },
    {
      leftText: "4SDESIGNS",
    },
    {
      leftText: "99% IS",
    },
    {
      leftText: "A BETTER FEELING",
    },
    {
      leftText: "A PERSONAL NOTE 73",
    },
    {
      leftText: "A-COLD-WALL*",
    },
    {
      leftText: "A. A. Spectrum",
    },
    {
      leftText: "A.P.C.",
    },
    {
      leftText: "AAPE by A Bathing Ape",
    },
    {
      leftText: "Acne Studios",
    },
    {
      leftText: "ACRONYM",
    },
    {
      leftText: "ADER error",
    },
    {
      leftText: "adidas Originals",
    },
    {
      leftText: "adidas x Human Made",
    },
    {
      leftText: "adidas x Humanrace by Pharrell Williams",
    },
    {
      leftText: "adidas x IVY PARK",
    },
    {
      leftText: "Adieu",
    },
    {
      leftText: "ADISH",
    },
    {
      leftText: "Advisory Board Crystals",
    },
    {
      leftText: "ADYAR",
    },
    {
      leftText: "ænrmòus",
    },
    {
      leftText: "AFFXWRKS",
    },
    {
      leftText: "Afield Out",
    },
    {
      leftText: "Agnona",
    },
    {
      leftText: "AGR",
    },
    {
      leftText: "Ahluwalia",
    },
    {
      leftText: "Ahluwalia &PaulSmith",
    },
    {
      leftText: "AïE",
    },
    {
      leftText: "AIREI",
    },
    {
      leftText: "Aitor Throup’s TheDSA",
    },
    {
      leftText: "Alan Crocetti",
    },
    {
      leftText: "Alchemist",
    },
    {
      leftText: "Alexander McQueen",
    },
    {
      leftText: "Alighieri",
    },
    {
      leftText: "All Blues",
    },
    {
      leftText: "AMBUSH",
    },
    {
      leftText: "AMI Alexandre Mattiussi",
    },
    {
      leftText: "AMIRI",
    },
    {
      leftText: "AMOMENTO",
    },
    {
      leftText: "and wander",
    },
    {
      leftText: "Andersson Bell",
    },
    {
      leftText: "ANDREĀDAMO",
    },
    {
      leftText: "Ann Demeulemeester",
    },
    {
      leftText: "Another Aspect",
    },
    {
      leftText: "Aries",
    },
    {
      leftText: "Arnar Már Jónsson",
    },
    {
      leftText: "ARTURO OBEGERO",
    },
    {
      leftText: "Ashley Williams",
    },
    {
      leftText: "Asics",
    },
    {
      leftText: "ASPESI",
    },
    {
      leftText: "AURALEE",
    },
    {
      leftText: "Awake NY",
    },
    {
      leftText: "Axel Arigato",
    },
    {
      leftText: "Aztech Mountain",
    },
    {
      leftText: "Balenciaga",
    },
    {
      leftText: "Bally Hike",
    },
    {
      leftText: "Balmain",
    },
    {
      leftText: "Bao Bao Issey Miyake",
    },
    {
      leftText: "BAPE",
    },
    {
      leftText: "Barbour",
    },
    {
      leftText: "Barena",
    },
    {
      leftText: "Bather",
    },
    {
      leftText: "BEAMS PLUS",
    },
    {
      leftText: "BED J.W. FORD",
    },
    {
      leftText: "Belstaff",
    },
    {
      leftText: "Benjamin Edgar",
    },
    {
      leftText: "Bethany Williams",
    },
    {
      leftText: "Bianca Saunders",
    },
    {
      leftText: "Billionaire Boys Club",
    },
    {
      leftText: "Birkenstock",
    },
    {
      leftText: "Blackmerle",
    },
    {
      leftText: "Bless",
    },
    {
      leftText: "Bleue Burnham",
    },
    {
      leftText: "BLK DNM",
    },
    {
      leftText: "Bloke",
    },
    {
      leftText: "Bode",
    },
    {
      leftText: "Boramy Viguier",
    },
    {
      leftText: "Boris Bidjan Saberi",
    },
    {
      leftText: "Boss",
    },
    {
      leftText: "both",
    },
    {
      leftText: "Bottega Veneta",
    },
    {
      leftText: "Botter",
    },
    {
      leftText: "Brain Dead",
    },
    {
      leftText: "Brioni",
    },
    {
      leftText: "Brownstone",
    },
    {
      leftText: "Brunello Cucinelli",
    },
    {
      leftText: "BRYAN JIMENÈZ",
    },
    {
      leftText: "Burberry",
    },
    {
      leftText: "By Walid",
    },
    {
      leftText: "BYBORRE",
    },
    {
      leftText: "C.P. Company",
    },
    {
      leftText: "C2H4",
    },
    {
      leftText: "Calvin Klein Underwear",
    },
    {
      leftText: "CALVINLUO",
    },
    {
      leftText: "Camber USA",
    },
    {
      leftText: "Camiel Fortgens",
    },
    {
      leftText: "CamperLab",
    },
    {
      leftText: "Canada Goose",
    },
    {
      leftText: "Carhartt Work In Progress",
    },
    {
      leftText: "Carlota Barrera",
    },
    {
      leftText: "Carne Bollente",
    },
    {
      leftText: "CARSON WACH",
    },
    {
      leftText: "Cartier",
    },
    {
      leftText: "Casablanca",
    },
    {
      leftText: "Castañer",
    },
    {
      leftText: "CAYL",
    },
    {
      leftText: "CDLP",
    },
    {
      leftText: "CFCL",
    },
    {
      leftText: "Champion Reverse Weave",
    },
    {
      leftText: "Charles Jeffrey Loverboy",
    },
    {
      leftText: "Chemist Creations",
    },
    {
      leftText: "Chen Peng",
    },
    {
      leftText: "Chet Lo",
    },
    {
      leftText: "Children of the Discordance",
    },
    {
      leftText: "CHIMI",
    },
    {
      leftText: "Chin Teo",
    },
    {
      leftText: "Chopova Lowena",
    },
    {
      leftText: "Christian Louboutin",
    },
    {
      leftText: "Clarks Originals",
    },
    {
      leftText: "Clot",
    },
    {
      leftText: "CMMN SWDN",
    },
    {
      leftText: "Coach 1941",
    },
    {
      leftText: "Collina Strada",
    },
    {
      leftText: "Come Back as a Flower",
    },
    {
      leftText: "COMMAS",
    },
    {
      leftText: "Comme des Garçons Homme",
    },
    {
      leftText: "Comme des Garçons Homme Deux",
    },
    {
      leftText: "Comme des Garçons Homme Plus",
    },
    {
      leftText: "Comme des Garçons Play",
    },
    {
      leftText: "Comme des Garçons Shirt",
    },
    {
      leftText: "Comme des Garçons Wallets",
    },
    {
      leftText: "Commission",
    },
    {
      leftText: "Common Projects",
    },
    {
      leftText: "Completedworks",
    },
    {
      leftText: "Connor McKnight",
    },
    {
      leftText: "Converse",
    },
    {
      leftText: "Coperni",
    },
    {
      leftText: "Cornerstone",
    },
    {
      leftText: "Corridor",
    },
    {
      leftText: "Côte&Ciel",
    },
    {
      leftText: "COTTON CITIZEN",
    },
    {
      leftText: "Courrèges",
    },
    {
      leftText: "Cowgirl Blue Co",
    },
    {
      leftText: "Craig Green",
    },
    {
      leftText: "Crocs",
    },
    {
      leftText: "Cutler And Gross",
    },
    {
      leftText: "D'heygere",
    },
    {
      leftText: "Daniel W. Fletcher",
    },
    {
      leftText: "Danner",
    },
    {
      leftText: "Davi Paris",
    },
    {
      leftText: "De Bonne Facture",
    },
    {
      leftText: "Dear Letterman",
    },
    {
      leftText: "Denim Tears",
    },
    {
      leftText: "Descente Allterrain",
    },
    {
      leftText: "DEVÁ STATES",
    },
    {
      leftText: "DEVEAUX NEW YORK",
    },
    {
      leftText: "Diemme",
    },
    {
      leftText: "Diesel",
    },
    {
      leftText: "Dime",
    },
    {
      leftText: "Dion Lee",
    },
    {
      leftText: "District Vision",
    },
    {
      leftText: "Dita",
    },
    {
      leftText: "Dolce & Gabbana",
    },
    {
      leftText: "DOPPIAA",
    },
    {
      leftText: "Double Rainbouu",
    },
    {
      leftText: "Doublet",
    },
    {
      leftText: "Dr. Martens",
    },
    {
      leftText: "Drake's",
    },
    {
      leftText: "drew house",
    },
    {
      leftText: "Dries Van Noten",
    },
    {
      leftText: "Drôle De Monsieur",
    },
    {
      leftText: "Dsquared2",
    },
    {
      leftText: "Dunhill",
    },
    {
      leftText: "Eastwood Danso",
    },
    {
      leftText: "Eckhaus Latta",
    },
    {
      leftText: "EDEN power corp",
    },
    {
      leftText: "Edward Cuming",
    },
    {
      leftText: "EGONlab",
    },
    {
      leftText: "Eidos",
    },
    {
      leftText: "éliou",
    },
    {
      leftText: "Emanuele Bicocchi",
    },
    {
      leftText: "Endless Joy",
    },
    {
      leftText: "Enfants Riches Déprimés",
    },
    {
      leftText: "Engineered Garments",
    },
    {
      leftText: "Entire Studios",
    },
    {
      leftText: "Erdem",
    },
    {
      leftText: "ERL",
    },
    {
      leftText: "Ermenegildo Zegna",
    },
    {
      leftText: "Ermenegildo Zegna Couture",
    },
    {
      leftText: "Ernest W. Baker",
    },
    {
      leftText: "Essentials",
    },
    {
      leftText: "Etro",
    },
    {
      leftText: "Études",
    },
    {
      leftText: "Evisu",
    },
    {
      leftText: "extreme cashmere",
    },
    {
      leftText: "Eytys",
    },
    {
      leftText: "F-LAGSTUF-F",
    },
    {
      leftText: "Factor's",
    },
    {
      leftText: "Faith Connexion",
    },
    {
      leftText: "FARIS",
    },
    {
      leftText: "FDMTL",
    },
    {
      leftText: "Fear of God",
    },
    {
      leftText: "Feit",
    },
    {
      leftText: "Fendi",
    },
    {
      leftText: "Feng Chen Wang",
    },
    {
      leftText: "FLATLIST EYEWEAR",
    },
    {
      leftText: "FRAME",
    },
    {
      leftText: "Frédérique Constant",
    },
    {
      leftText: "FREI-MUT",
    },
    {
      leftText: "Frenckenberger",
    },
    {
      leftText: "Fumito Ganryu",
    },
    {
      leftText: "Gabriela Hearst",
    },
    {
      leftText: "Garrett Leight",
    },
    {
      leftText: "GAUCHERE",
    },
    {
      leftText: "GCDS",
    },
    {
      leftText: "Gentle Fullness",
    },
    {
      leftText: "Gentle Monster",
    },
    {
      leftText: "Georges Wendell",
    },
    {
      leftText: "Georgia Kemball",
    },
    {
      leftText: "Gianvito Rossi",
    },
    {
      leftText: "Gil Rodriguez",
    },
    {
      leftText: "Gimaguas",
    },
    {
      leftText: "Giorgio Armani",
    },
    {
      leftText: "Giuseppe Zanotti",
    },
    {
      leftText: "Givenchy",
    },
    {
      leftText: "GmbH",
    },
    {
      leftText: "Golden Goose",
    },
    {
      leftText: "Goldwin",
    },
    {
      leftText: "Good News",
    },
    {
      leftText: "Goodfight",
    },
    {
      leftText: "GR10K",
    },
    {
      leftText: "Gramicci",
    },
    {
      leftText: "Greg Lauren",
    },
    {
      leftText: "Grey Ant",
    },
    {
      leftText: "Gucci",
    },
    {
      leftText: "Guidi",
    },
    {
      leftText: "Haider Ackermann",
    },
    {
      leftText: "Han Kjobenhavn",
    },
    {
      leftText: "Hannah Jewett",
    },
    {
      leftText: "HANREJ",
    },
    {
      leftText: "HARAGO",
    },
    {
      leftText: "Harmony",
    },
    {
      leftText: "Harris Wharf London",
    },
    {
      leftText: "Hatton Labs",
    },
    {
      leftText: "Hed Mayner",
    },
    {
      leftText: "HELIOT EMIL",
    },
    {
      leftText: "Helmut Lang",
    },
    {
      leftText: "Henrik Vibskov",
    },
    {
      leftText: "Herno",
    },
    {
      leftText: "Heron Preston",
    },
    {
      leftText: "Heron Preston for Calvin Klein",
    },
    {
      leftText: "HH-118389225",
    },
    {
      leftText: "Holden",
    },
    {
      leftText: "Holubar",
    },
    {
      leftText: "Homme Plissé Issey Miyake",
    },
    {
      leftText: "Honey Fucking Dijon",
    },
    {
      leftText: "Hood by Air",
    },
    {
      leftText: "HOPE",
    },
    {
      leftText: "House of the Very Islands",
    },
    {
      leftText: "Hugo",
    },
    {
      leftText: "Human Recreational Services",
    },
    {
      leftText: "Husbands",
    },
    {
      leftText: "Hyein Seo",
    },
    {
      leftText: "ICECREAM",
    },
    {
      leftText: "IN GOLD WE TRUST PARIS",
    },
    {
      leftText: "Innerraum",
    },
    {
      leftText: "Isabel Benenato",
    },
    {
      leftText: "Isabel Marant",
    },
    {
      leftText: "Isaia",
    },
    {
      leftText: "Izzue",
    },
    {
      leftText: "Jacquemus",
    },
    {
      leftText: "JACQUES",
    },
    {
      leftText: "JACQUES MARIE MAGE",
    },
    {
      leftText: "Jam",
    },
    {
      leftText: "Jan-Jan Van Essche",
    },
    {
      leftText: "Jean Paul Gaultier",
    },
    {
      leftText: "JERIH",
    },
    {
      leftText: "JieDa",
    },
    {
      leftText: "Jil Sander",
    },
    {
      leftText: "JiyongKim",
    },
    {
      leftText: "John Elliott",
    },
    {
      leftText: "Johnlawrencesullivan",
    },
    {
      leftText: "Judy Turner",
    },
    {
      leftText: "Julius",
    },
    {
      leftText: "Junya Watanabe",
    },
    {
      leftText: "Just Cavalli",
    },
    {
      leftText: "Juun.J",
    },
    {
      leftText: "JW Anderson",
    },
    {
      leftText: "Kanghyuk",
    },
    {
      leftText: "Kanuk",
    },
    {
      leftText: "KARA",
    },
    {
      leftText: "Karu Research",
    },
    {
      leftText: "KASSL Editions",
    },
    {
      leftText: "Keenkee",
    },
    {
      leftText: "Kenzo",
    },
    {
      leftText: "KIDILL",
    },
    {
      leftText: "Kids Worldwide",
    },
    {
      leftText: "KidSuper",
    },
    {
      leftText: "Kiko Kostadinov",
    },
    {
      leftText: "King & Tuckfield",
    },
    {
      leftText: "Klättermusen",
    },
    {
      leftText: "Ksubi",
    },
    {
      leftText: "Kuboraum",
    },
    {
      leftText: "Kuro",
    },
    {
      leftText: "KUSIKOHC",
    },
    {
      leftText: "L'Homme Rouge",
    },
    {
      leftText: "Label Under Construction",
    },
    {
      leftText: "Labrum",
    },
    {
      leftText: "Lacoste",
    },
    {
      leftText: "Lady White Co.",
    },
    {
      leftText: "Landlord",
    },
    {
      leftText: "Lanvin",
    },
    {
      leftText: "Le Gramme",
    },
    {
      leftText: "LE17SEPTEMBRE",
    },
    {
      leftText: "Lemaire",
    },
    {
      leftText: "Les Tien",
    },
    {
      leftText: "Levi's",
    },
    {
      leftText: "Levi's Made & Crafted",
    },
    {
      leftText: "Levi's Vintage Clothing",
    },
    {
      leftText: "Lexxola",
    },
    {
      leftText: "Li-Ning",
    },
    {
      leftText: "Liam Hodges",
    },
    {
      leftText: "Liberal Youth Ministry",
    },
    {
      leftText: "Loewe",
    },
    {
      leftText: "Lorette Colé Duprat",
    },
    {
      leftText: "LU'U DAN",
    },
    {
      leftText: "Luar",
    },
    {
      leftText: "Ludovic de Saint Sernin",
    },
    {
      leftText: "Lukhanyo Mdingi",
    },
    {
      leftText: "M.A. Martin Asbjørn",
    },
    {
      leftText: "MAAP",
    },
    {
      leftText: "Mackage",
    },
    {
      leftText: "Mackintosh",
    },
    {
      leftText: "Magliano",
    },
    {
      leftText: "Mainline:RUS/Fr.CA/DE",
    },
    {
      leftText: "Maison Kitsuné",
    },
    {
      leftText: "Maison Margiela",
    },
    {
      leftText: "Malibu Sandals",
    },
    {
      leftText: "Manolo Blahnik",
    },
    {
      leftText: "Manors Golf",
    },
    {
      leftText: "Marc Jacobs",
    },
    {
      leftText: "Marc Jacobs Heaven",
    },
    {
      leftText: "Marcelo Burlon County of Milan",
    },
    {
      leftText: "Margaret Howell",
    },
    {
      leftText: "Marine Serre",
    },
    {
      leftText: "Marni",
    },
    {
      leftText: "Marsèll",
    },
    {
      leftText: "Marshall Columbia",
    },
    {
      leftText: "Martin Asbjørn",
    },
    {
      leftText: "Martine Ali",
    },
    {
      leftText: "Martine Rose",
    },
    {
      leftText: "Maryam Nassir Zadeh",
    },
    {
      leftText: "Massimo Alba",
    },
    {
      leftText: "Master-Piece Co",
    },
    {
      leftText: "mastermind JAPAN",
    },
    {
      leftText: "mastermind WORLD",
    },
    {
      leftText: "Matsuda",
    },
    {
      leftText: "Max Mara",
    },
    {
      leftText: "Maximilian Davis",
    },
    {
      leftText: "MCQ",
    },
    {
      leftText: "McQ Alexander McQueen",
    },
    {
      leftText: "Merrell 1TRL",
    },
    {
      leftText: "Meta Campania Collective",
    },
    {
      leftText: "mfpen",
    },
    {
      leftText: "MHL by Margaret Howell",
    },
    {
      leftText: "Miharayasuhiro",
    },
    {
      leftText: "MISBHV",
    },
    {
      leftText: "Missoni",
    },
    {
      leftText: "Missoni Sport",
    },
    {
      leftText: "MM6 Maison Margiela",
    },
    {
      leftText: "Molly Goddard",
    },
    {
      leftText: "Moncler",
    },
    {
      leftText: "Moncler Genius",
    },
    {
      leftText: "Moncler Grenoble",
    },
    {
      leftText: "Moose Knuckles x Eckhaus Latta",
    },
    {
      leftText: "Moschino",
    },
    {
      leftText: "Moussy Vintage",
    },
    {
      leftText: "Mowalola",
    },
    {
      leftText: "Mr. Saturday",
    },
    {
      leftText: "MSGM",
    },
    {
      leftText: "Mugler",
    },
    {
      leftText: "Mühle-Glashütte",
    },
    {
      leftText: "Museum of Peace & Quiet",
    },
    {
      leftText: "Mykita",
    },
    {
      leftText: "N.Hoolywood",
    },
    {
      leftText: "Nahmias",
    },
    {
      leftText: "Naked & Famous Denim",
    },
    {
      leftText: "Namacheko",
    },
    {
      leftText: "NAMESAKE",
    },
    {
      leftText: "Nanamica",
    },
    {
      leftText: "Nanushka",
    },
    {
      leftText: "NAPA by Martine Rose",
    },
    {
      leftText: "Native Sons",
    },
    {
      leftText: "Needles",
    },
    {
      leftText: "Neighborhood",
    },
    {
      leftText: "Neil Barrett",
    },
    {
      leftText: "NEMEN®",
    },
    {
      leftText: "New Balance",
    },
    {
      leftText: "Nicholas Daley",
    },
    {
      leftText: "Nike Jordan",
    },
    {
      leftText: "Noah",
    },
    {
      leftText: "Nobis",
    },
    {
      leftText: "NOMA t.d.",
    },
    {
      leftText: "non",
    },
    {
      leftText: "nonnative",
    },
    {
      leftText: "Noon Goons",
    },
    {
      leftText: "Norda",
    },
    {
      leftText: "Norse Projects",
    },
    {
      leftText: "NotSoNormal",
    },
    {
      leftText: "Nudie Jeans",
    },
    {
      leftText: "Numbering",
    },
    {
      leftText: "Oakley",
    },
    {
      leftText: "OAMC",
    },
    {
      leftText: "Off-White",
    },
    {
      leftText: "Officine Creative",
    },
    {
      leftText: "Officine Générale",
    },
    {
      leftText: "Ole Mathiesen",
    },
    {
      leftText: "Oliver Peoples",
    },
    {
      leftText: "On",
    },
    {
      leftText: "Online Ceramics",
    },
    {
      leftText: "Opening Ceremony",
    },
    {
      leftText: "Ostrya",
    },
    {
      leftText: "Ottolinger",
    },
    {
      leftText: "Our Legacy",
    },
    {
      leftText: "OVERCOAT",
    },
    {
      leftText: "Paco Rabanne",
    },
    {
      leftText: "Padmore & Barnes",
    },
    {
      leftText: "Palm Angels",
    },
    {
      leftText: "PALMER",
    },
    {
      leftText: "Palmes",
    },
    {
      leftText: "Paloma Wool",
    },
    {
      leftText: "Palomo Spain",
    },
    {
      leftText: "Panconesi",
    },
    {
      leftText: "PANGAIA",
    },
    {
      leftText: "PARADIS PERDUS",
    },
    {
      leftText: "Parajumpers",
    },
    {
      leftText: "paria /FARZANEH",
    },
    {
      leftText: "Pas Normal Studios",
    },
    {
      leftText: "Paul Smith",
    },
    {
      leftText: "Paul Smith + Christoph Niemann",
    },
    {
      leftText: "Paul Smith 50th Anniversary",
    },
    {
      leftText: "Paul Stuart",
    },
    {
      leftText: "Pearls Before Swine",
    },
    {
      leftText: "PEdALED",
    },
    {
      leftText: "Peter Do",
    },
    {
      leftText: "Phileo",
    },
    {
      leftText: "PHIPPS",
    },
    {
      leftText: "Phlemuns",
    },
    {
      leftText: "Pierre Hardy",
    },
    {
      leftText: "Polo Ralph Lauren",
    },
    {
      leftText: "Port Tanger",
    },
    {
      leftText: "Post Archive Faction (PAF)",
    },
    {
      leftText: "Praying",
    },
    {
      leftText: "PRESIDENT's",
    },
    {
      leftText: "PROJEKT PRODUKT",
    },
    {
      leftText: "PS by Paul Smith",
    },
    {
      leftText: "Psychworld",
    },
    {
      leftText: "Pyer Moss",
    },
    {
      leftText: "Quiet Golf",
    },
    {
      leftText: "R13",
    },
    {
      leftText: "RAEN",
    },
    {
      leftText: "Raf Simons",
    },
    {
      leftText: "rag & bone",
    },
    {
      leftText: "RAINS",
    },
    {
      leftText: "Ralph Lauren Purple Label",
    },
    {
      leftText: "Random Identities",
    },
    {
      leftText: "RANDT",
    },
    {
      leftText: "Rassvet",
    },
    {
      leftText: "RÄTHEL & WOLF",
    },
    {
      leftText: "Ray-Ban",
    },
    {
      leftText: "Re/Done",
    },
    {
      leftText: "Recto",
    },
    {
      leftText: "Red Wing Heritage",
    },
    {
      leftText: "Reebok by Pyer Moss",
    },
    {
      leftText: "Reebok Classics",
    },
    {
      leftText: "Reese Cooper",
    },
    {
      leftText: "Remi Relief",
    },
    {
      leftText: "RETROSUPERFUTURE",
    },
    {
      leftText: "Rhude",
    },
    {
      leftText: "Rick Owens",
    },
    {
      leftText: "Rick Owens Drkshdw",
    },
    {
      leftText: "Ring Jacket",
    },
    {
      leftText: "rito structure",
    },
    {
      leftText: "RK",
    },
    {
      leftText: "RLX Ralph Lauren",
    },
    {
      leftText: "ROA",
    },
    {
      leftText: "Rochambeau",
    },
    {
      leftText: "Rochas Homme",
    },
    {
      leftText: "ROGIC",
    },
    {
      leftText: "Rombaut",
    },
    {
      leftText: "RRL",
    },
    {
      leftText: "s.k. manor hill",
    },
    {
      leftText: "S.R. STUDIO. LA. CA.",
    },
    {
      leftText: "S.S.Daley",
    },
    {
      leftText: "sacai",
    },
    {
      leftText: "Saint Laurent",
    },
    {
      leftText: "Saintwoods",
    },
    {
      leftText: "Salie 66",
    },
    {
      leftText: "Salomon",
    },
    {
      leftText: "Salvatore Ferragamo",
    },
    {
      leftText: "Sankuanz",
    },
    {
      leftText: "Santangelo",
    },
    {
      leftText: "Santoni",
    },
    {
      leftText: "Sasquatchfabrix.",
    },
    {
      leftText: "Satisfy",
    },
    {
      leftText: "Satta",
    },
    {
      leftText: "Saturdays NYC",
    },
    {
      leftText: "Saul Nash",
    },
    {
      leftText: "SC103",
    },
    {
      leftText: "Schnayderman's",
    },
    {
      leftText: "Schott",
    },
    {
      leftText: "Sean Suen",
    },
    {
      leftText: "Seb Brown",
    },
    {
      leftText: "Sebago",
    },
    {
      leftText: "Sebastien Ami.",
    },
    {
      leftText: "Sébline",
    },
    {
      leftText: "Second/Layer",
    },
    {
      leftText: "SEEKINGS",
    },
    {
      leftText: "Séfr",
    },
    {
      leftText: "Serapis",
    },
    {
      leftText: "Sergio Tacchini",
    },
    {
      leftText: "Shinola",
    },
    {
      leftText: "Sies Marjan",
    },
    {
      leftText: "Situationist",
    },
    {
      leftText: "Sky High Farm Workwear",
    },
    {
      leftText: "Smythson",
    },
    {
      leftText: "Snow Peak",
    },
    {
      leftText: "Soar Running",
    },
    {
      leftText: "Solid & Striped",
    },
    {
      leftText: "Solid Homme",
    },
    {
      leftText: "Song for the Mute",
    },
    {
      leftText: "Sophie Buhai",
    },
    {
      leftText: "SOPHNET.",
    },
    {
      leftText: "Soulland",
    },
    {
      leftText: "South2 West8",
    },
    {
      leftText: "SPENCER BADU",
    },
    {
      leftText: "Sporty & Rich",
    },
    {
      leftText: "SSENSE WORKS",
    },
    {
      leftText: "St-Henri",
    },
    {
      leftText: "Stay Made",
    },
    {
      leftText: "Stefan Cooke",
    },
    {
      leftText: "Stella McCartney",
    },
    {
      leftText: "Stockholm (Surfboard) Club",
    },
    {
      leftText: "Stolen Girlfriends Club",
    },
    {
      leftText: "Stone Island",
    },
    {
      leftText: "Stone Island Shadow Project",
    },
    {
      leftText: "Story mfg.",
    },
    {
      leftText: "Stray Rats",
    },
    {
      leftText: "Stüssy",
    },
    {
      leftText: "Stutterheim",
    },
    {
      leftText: "SUBU",
    },
    {
      leftText: "Suicoke",
    },
    {
      leftText: "Sulvam",
    },
    {
      leftText: "Sunflower",
    },
    {
      leftText: "Sunnei",
    },
    {
      leftText: "Sunspel",
    },
    {
      leftText: "SWEETLIMEJUICE",
    },
    {
      leftText: "System",
    },
    {
      leftText: "Taiga Takahashi",
    },
    {
      leftText: "TAION",
    },
    {
      leftText: "TAKAHIROMIYASHITA TheSoloist.",
    },
    {
      leftText: "Tanaka",
    },
    {
      leftText: "Tanner Fletcher",
    },
    {
      leftText: "Tekla",
    },
    {
      leftText: "Ten c",
    },
    {
      leftText: "Teva",
    },
    {
      leftText: "Thames MMXX.",
    },
    {
      leftText: "The Conspires",
    },
    {
      leftText: "The Elder Statesman",
    },
    {
      leftText: "The Farmers Market Global",
    },
    {
      leftText: "The North Face",
    },
    {
      leftText: "The Row",
    },
    {
      leftText: "The Very Warm",
    },
    {
      leftText: "The Viridi-anne",
    },
    {
      leftText: "THEBE MAGUGU",
    },
    {
      leftText: "Theophilio",
    },
    {
      leftText: "Theory",
    },
    {
      leftText: "Thierry Lasry",
    },
    {
      leftText: "thisisneverthat",
    },
    {
      leftText: "Thom Browne",
    },
    {
      leftText: "Tibi",
    },
    {
      leftText: "Tiger of Sweden",
    },
    {
      leftText: "Tiger of Sweden Jeans",
    },
    {
      leftText: "Toga Virilis",
    },
    {
      leftText: "Tokyo James",
    },
    {
      leftText: "TOM FORD",
    },
    {
      leftText: "Tom Sachs",
    },
    {
      leftText: "Tom Wood",
    },
    {
      leftText: "Toogood",
    },
    {
      leftText: "Total Luxury Spa",
    },
    {
      leftText: "True Tribe",
    },
    {
      leftText: "ts(s)",
    },
    {
      leftText: "Ugo Cacciatori",
    },
    {
      leftText: "Undercover",
    },
    {
      leftText: "Undercoverism",
    },
    {
      leftText: "Uniform Experiment",
    },
    {
      leftText: "UNIFORME",
    },
    {
      leftText: "Valentino",
    },
    {
      leftText: "Valentino Garavani",
    },
    {
      leftText: "Vans",
    },
    {
      leftText: "VEERT",
    },
    {
      leftText: "Veilance",
    },
    {
      leftText: "VEJA",
    },
    {
      leftText: "Vejas Maksimas",
    },
    {
      leftText: "Versace",
    },
    {
      leftText: "Versace Jeans Couture",
    },
    {
      leftText: "Versace Underwear",
    },
    {
      leftText: "VETEMENTS",
    },
    {
      leftText: "Vince",
    },
    {
      leftText: "Virón",
    },
    {
      leftText: "Visvim",
    },
    {
      leftText: "VITELLI",
    },
    {
      leftText: "VIVENDII",
    },
    {
      leftText: "Vivienne Westwood",
    },
    {
      leftText: "VTMNTS",
    },
    {
      leftText: "Vyner Articles",
    },
    {
      leftText: "WACKO MARIA",
    },
    {
      leftText: "Wales Bonner",
    },
    {
      leftText: "WARDROBE.NYC",
    },
    {
      leftText: "We11done",
    },
    {
      leftText: "Wekaforé",
    },
    {
      leftText: "Western Hydrodynamic Research",
    },
    {
      leftText: "White Mountaineering",
    },
    {
      leftText: "Who Decides War by MRDR BRVDO",
    },
    {
      leftText: "Winnie New York",
    },
    {
      leftText: "Wolford",
    },
    {
      leftText: "Won Hundred",
    },
    {
      leftText: "Wood Wood",
    },
    {
      leftText: "Wooyoungmi",
    },
    {
      leftText: "WWW.WILLSHOTT",
    },
    {
      leftText: "Xander Zhou",
    },
    {
      leftText: "XLIM",
    },
    {
      leftText: "Y-3",
    },
    {
      leftText: "Y/Project",
    },
    {
      leftText: "YMC",
    },
    {
      leftText: "Yohji Yamamoto",
    },
    {
      leftText: "Youths in Balaclava",
    },
    {
      leftText: "Yuichi Toyama",
    },
    {
      leftText: "Yuki Hashimoto",
    },
    {
      leftText: "Yves Salomon",
    },
    {
      leftText: "Yves Salomon - Army",
    },
    {
      leftText: "Z Zegna",
    },
    {
      leftText: "ZAYN x ARNETTE",
    },
    {
      leftText: "ZEGNA",
    },
  ];

  leftText.map(function (elem) {
    let span = document.createElement("span");
    span.innerText = elem.leftText;
    document.querySelector("#box1").append(span);
  });

  //   this is for right hand side part

  let rightdiv1 = document.createElement("div");
  let rightdiv2 = document.createElement("div");

  let h2_3 = document.createElement("h2");
  h2_3.innerText = "SORT";

  let s5 = document.createElement("span");
  s5.innerText = "Latest arrivals";

  let s6 = document.createElement("span");
  s6.innerText = "Trending";

  let s7 = document.createElement("span");
  s7.innerText = "Price: Low to high";
  s7.setAttribute("id", "low2high");

  let s8 = document.createElement("span");
  s8.innerText = "Price: High to low";
  s8.setAttribute("id", "high2low");

  rightdiv1.append(h2_3, s5, s6, s7, s8);

  let h2_4 = document.createElement("h2");
  h2_4.innerText = "COLORS";

  rightdiv2.append(h2_4);

  let colors = [
    {
      color: "ALL COLORS",
    },
    {
      color: "Black",
    },
    {
      color: "Blue",
    },
    {
      color: "Brown",
    },
    {
      color: "Burgundy",
    },
    {
      color: "Gray",
    },
    {
      color: "Green",
    },
    {
      color: "Navy",
    },
    {
      color: "Orange",
    },
    {
      color: "Pink",
    },
    {
      color: "Purple",
    },
    {
      color: "Red",
    },
    {
      color: "Tan",
    },
    {
      color: "White",
    },
    {
      color: "Yellow",
    },
  ];
  document.querySelector("#box3").append(rightdiv1, rightdiv2);

  colors.map(function (elem) {
    let s = document.createElement("span");
    s.innerText = elem.color;
    document.querySelector("#box3").append(s);
  });
}


document.querySelector("#low2high").addEventListener("click",sortPrice1);
document.querySelector("#high2low").addEventListener("click",sortPrice2);

function sortPrice1(){
    mensData.sort(function(a,b){
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0;
    });

    display(mensData);
}

function sortPrice2(){
    mensData.sort(function(a,b){
        if(a.price<b.price) return 1;
        if(a.price>b.price) return -1;
        return 0;
    });

    display(mensData);
}