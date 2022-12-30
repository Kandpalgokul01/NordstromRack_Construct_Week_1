// let userData = JSON.parse(localStorage.getItem("uCart")) || [];
let womensData = [
{
        image_url:"https://n.nordstrommedia.com/id/sr3/25ab1896-ff1c-431f-a5af-161f1f1c58f1.jpeg?h=365&w=240&dpr=2",
       
        name:"BP.",
        discription:"Cat Eye Sunglasses",
        price:9.78,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/357d04d0-2f9d-4b14-8106-af17d70ad561.jpeg?h=365&w=240&dpr=2",
       
        name:"BOHO ME",
        discription:"Crochet Inset Cover",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/5f0c8e07-ae4a-463b-8c5f-4565d8423e20.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Seamless Crossback Bralette",
        price:37.48,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/479ffc71-3248-4f48-803d-7690fe11cf3a.jpeg?h=365&w=240&dpr=2",
        
        name:"Madewell",
        discription:"Attack",
        price:7.70,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/ab19dbbf-6c5b-4d1b-8a8c-93d19ba59383.jpeg?h=365&w=240&dpr=2",
       
        name:"Madewell",
        discription:"Cubic Earring Pack",
        price:7.23,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },

    {
        image_url:"https://n.nordstrommedia.com/id/sr3/50f08bf6-d382-455d-9923-c37931f9a890.jpeg?h=365&w=240&dpr=2",
       
        name:"Madewell",
        discription:"Motion Tank ",
        price:34.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/ee846411-f367-48ff-a238-211793ddfdd6.jpeg?h=365&w=240&dpr=2",
      
        name:"Nikwe",
        discription:"Ribbed Racerback Tank Top",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/22266ea0-f7d8-45a5-89b3-88dfe29c8853.jpeg?h=365&w=240&dpr=2",
        name:"Madden Girl",
        discription:"Cell Phone Crossbody",
        price:14.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/f7fd6ed6-b593-4bac-8905-fa0ee57c2db6.jpeg?h=365&w=240&dpr=2",
       
        name:"BOHO ME",
        discription:"Oversized Boxy Crop ",
        price:15.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/e4e0d123-7e5b-48d5-853d-b3edc40c4c5e.jpeg?h=365&w=240&dpr=2",
       
        name:"Zella",
        discription:"Dri-FIT Training ",
        price:8.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/eb49c551-aca0-4932-9ab4-4fd0d41b8576.jpeg?h=365&w=240&dpr=2",
       
        name:"BOHO ME",
        discription:"Low Cut ",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/6f4c1ff5-ab92-4d28-980a-ee1f2beaebeb.jpeg?h=365&w=240&dpr=2",
        
        name:"Steve Madden",
        discription:"Delia Woven",
        price:24.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },

    {
        image_url:"https://n.nordstrommedia.com/id/sr3/a7826656-9313-4fd5-bd3e-f2905fd56bf2.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Hailey Ribbed",
        price:19.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/be5f78a4-6f1a-4267-b982-1a664cac9bb1.jpeg?h=365&w=240&dpr=2",
        
        name:"90 DEGREE BY REFLEX",
        discription:"High-Low Full Jacket",
        price:34.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/87f5d7fb-d684-49e9-800b-9863e01ac2b2.jpeg?h=365&w=240&dpr=2",
       
        name:"Adidas",
        discription:"Dri-FIT Training",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/136a077a-2c04-4537-80e0-5ee26fdacb7d.jpeg?h=365&w=240&dpr=2",
        
        name:"Nike",
        discription:"Delia Woven",
        price:24.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/574d45cc-fce5-4648-a025-185458e87447.jpeg?h=365&w=240&dpr=2",
       
        name:"Steve Madden",
        discription:"Quest Quilted Indexer Wallet",
        price:28.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/fbbd5cbf-bcdb-46e2-81c4-01441758e241.jpeg?h=365&w=240&dpr=2",
        
        name:"Adidas",
        discription:"High-Low Full",
        price:28.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/1bd98f48-bd72-405c-8bd2-e8bd661d6396.jpeg?h=365&w=240&dpr=2",
        
        name:"Nike",
        discription:"Delia Woven Dress",
        price:15.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/c2d5b507-7fc4-4b80-bf86-f154ebb1827e.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Motion Tank ",
        price:18.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/d36b5050-8589-46a9-af62-74297d947306.jpeg?h=365&w=240&dpr=2",
        
        name:"90 DEGREE BY REFLEX",
        discription:"High-Low Full",
        price:24.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/cadd3d41-4aca-4a79-aad1-a88b760ef8db.jpeg?h=365&w=240&dpr=2",
       
        name:"Madewell",
        discription:"Everyday Set of 2 Earrings",
        price:16.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/3926d476-045c-401c-b459-8f510bae155d.jpeg?h=365&w=240&dpr=2",
       
        name:"EYE CANDY LOS ANGELES",
        discription:"Cubic Zirconia Earrings",
        price:22.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/0d6ea90e-b59f-4b4c-8c2e-b42067ac9f48.jpeg?h=365&w=240&dpr=2",
       
        name:"Steve Madden",
        discription:"Low Cut Sport",
        price:34.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/526ee7ac-60d2-4bf0-97e1-7dab12521a16.jpeg?h=365&w=240&dpr=2",
       
        name:"BOHO ME",
        discription:"Low Cut",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/070ef21a-d17e-4f68-99be-f2300ca8e9a2.jpeg?h=365&w=240&dpr=2",
        
        name:"BOHO ME",
        discription:"High-Low Full Jacket",
        price:26.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/2950a5f7-2e00-4118-819f-65eab2d11a11.jpeg?h=365&w=240&dpr=2",
        
        name:"90 DEGREE BY REFLEX",
        discription:"High-Low Full ",
        price:6.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/cf35b5bc-0da8-484d-9b5d-b6096863db3c.jpeg?h=365&w=240&dpr=2",
        
        name:"90 DEGREE BY REFLEX",
        discription:"High-Low Full Jacket",
        price:32.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/f83900db-e5e8-4870-ac15-5fe5cbabe028.jpeg?h=365&w=240&dpr=2",
        
        name:"BOHO ME",
        discription:"High-Low Full Jacket",
        price:47.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/c6c00950-ab21-4847-b138-1065a933f85d.jpeg?h=365&w=240&dpr=2",
       
        name:" Zella",
        discription:"Motion Tank Dress",
        price:34.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/7fb46d09-a7b3-4356-98bd-dd42aa662f17.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Motion Tank",
        price:18.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/8e3164da-30e5-4551-80e8-4cfb9cae702f.jpeg?h=365&w=240&dpr=2",
       
        name:"BOHO ME",
        discription:"Motion Tank Dress",
        price:12.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/77423e3b-d185-4f7c-bbb9-22cde25eab49.jpeg?h=365&w=240&dpr=2",
       
        name:"Madewell",
        discription:"Motion Tank",
        price:36.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/fb782115-b631-4859-a9d8-ccfef6909647.jpeg?h=365&w=240&dpr=2",
       
        name:"Adidas",
        discription:"Motion Tank ",
        price:18.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },

    {
        image_url:"https://n.nordstrommedia.com/id/sr3/2d0218b6-69be-4969-affa-ad752dc7b757.jpeg?h=365&w=240&dpr=2",
       
        name:"BOHO ME",
        discription:"Motion Tank Dress",
        price:18.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        image_url:"https://n.nordstrommedia.com/id/sr3/81cc855a-06ee-469b-94ab-034c7caa28ca.jpeg?h=365&w=240&dpr=2",
       
        name:"Steve Madden",
        discription:"Motion Tank",
        price:23.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },

];
let main = document.getElementById("main");

function displayData(womensData){

    document.getElementById("main").innerHTML = null;
     
    womensData.forEach(function(elem){
        // console.log(elem)
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class","wBox");

        let pic = document.createElement("img");
        pic.setAttribute("class","wPic");
        pic.src = elem.image_url;

        let nam = document.createElement("p");
        nam.setAttribute("class","wName");
        nam.innerText = elem.name;

        let des = document.createElement("p");
        des.setAttribute("class","wDes");
        let spn = document.createElement("span");
        spn.setAttribute("class","spn");
        spn.innerText = elem.discription;
        des.append(spn); 

        let cost = document.createElement("p");
        cost.setAttribute("class","wPrice");
        cost.innerText = "$"+elem.price;

         let btns = document.createElement("button");
         btns.setAttribute("class","cart");
         btns.innerText = elem.btn;

        let ship = document.createElement("p");
        ship.setAttribute("class","wData");
        ship.innerText = elem.delivery;
        
        btns.addEventListener("click",function(){
            addToCart(elem);    
        });
        innerDiv.append(pic,nam, des, cost,btns, ship);
        main.append(innerDiv);  
    });
}
let data = JSON.parse(localStorage.getItem("uCart"));

displayData(womensData);
function addToCart(elem){
    let wData = JSON.parse(localStorage.getItem("uCart")) || [];

    for( let i=0;i<wData.length;i++){
        if(wData[i].image_url === elem.image_url && wData[i].name === elem.name && wData[i].discription === elem.discription && wData[i].price === elem.price){

            alert("Product is already in cart");
            return 0; 
        }

    }
    wData.push(elem);
    localStorage.setItem("uCart",JSON.stringify(wData));
    alert(" Successfully added 😊😊");
}


document.getElementById('price-sort').addEventListener('click', sort)


function sort(){
    let s = document.getElementById("price-sort").value;

    console.log(s)

    if(s == 'lth'){

        womensData.sort( function(a, b){

            if(a.price > b.price) return 1
            if(a.price < b.price) return -1
            return 0    
        } );

        displayData(womensData);
        console.log(womensData);
    };

    if(s == 'htl'){

        womensData.sort( function(a, b){

            if(a.price > b.price) return -1
            if(a.price < b.price) return 1
            return 0    
        });

        displayData(womensData);
        console.log(womensData);
    };
}