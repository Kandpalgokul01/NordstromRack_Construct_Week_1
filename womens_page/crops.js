// let userData = JSON.parse(localStorage.getItem("uCart")) || [];
let womensData = [
{
        img_url:"https://n.nordstrommedia.com/id/sr3/17f0f773-593a-41eb-8822-1fdbeb59ab19.jpeg?h=365&w=240&dpr=2",
       
        name:"Nike",
        discription:"Dri-FIT Training T-Shirt", 
        price:26.00,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/67646382-c233-4766-9e9c-519e121f1453.jpeg?h=365&w=240&dpr=2",
       
        name:"90 DEGREE BY REFLEX",
        discription:"Interval Woven Run Shorts",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/7382959e-7ce9-419d-881e-826727ae65cc.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Seamless Crossback Bralette",
        price:7.48,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/7c32725d-517e-43d5-84a2-dc36e1eb5db7.jpeg?h=365&w=240&dpr=2",
        
        name:"Nike",
        discription:"Attack Sport Shorts",
        price:12.34,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/12bfad1d-8a06-494b-b0ff-011dc02d7583.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Interval Woven Run Shorts",
        price:26.00,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },

    {
        img_url:"https://n.nordstrommedia.com/id/sr3/3e457151-c985-435f-8e20-69f0a996ec80.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Motion Tank Dress",
        price:34.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/daaa7ce7-848b-430a-9ef3-f2fbd37ca449.jpeg?h=365&w=240&dpr=2",
      
        name:"90 DEGREE BY REFLEX",
        discription:"Ribbed Racerback Tank Top",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/f1dc3f89-123f-471c-bb93-34c2f0defaf6.jpeg?h=365&w=240&dpr=2",
        name:"Z by Zella",
        discription:"Training Racerback Tank",
        price:14.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/508cd16a-cdd7-4e13-b13c-1576c01086a8.jpeg?h=365&w=240&dpr=2",
       
        name:"90 DEGREE BY REFLEX",
        discription:"Oversized Boxy Crop T-Shirt",
        price:15.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/d0e7e62f-16b6-4fdf-a9e1-134940c6cf36.jpeg?h=365&w=240&dpr=2",
       
        name:"Zella",
        discription:"Dri-FIT Training T-Shirt",
        price:28.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/6cd15a59-8601-4893-b477-88f7659605e7.jpeg?h=365&w=240&dpr=2",
       
        name:"Nike",
        discription:"Low Cut Sport Socks",
        price:9.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/19056857-c8cc-40aa-8435-1b5df3aefc5d.jpeg?h=365&w=240&dpr=2",
        
        name:"Nike",
        discription:"Delia Woven Dress",
        price:24.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },

    {
        img_url:"https://n.nordstrommedia.com/id/sr3/5202d76e-767a-42e4-95bd-0d141d87d3b1.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Hailey Ribbed Hoodie",
        price:19.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/051b1992-678f-41e8-9b03-bf178fbc9151.jpeg?h=365&w=240&dpr=2",
        name:"90 DEGREE BY REFLEX",
        discription:"High-Low Full Jacket",
        price:34.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/f0a766ca-98b8-4646-93ea-cf9e60e9acbf.jpeg?h=365&w=240&dpr=2",
       
        name:"Nike",
        discription:"Dri-FIT Training T-Shirt",
        price:19.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/70de4236-221c-4dc3-8401-f09d20c09fa6.jpeg?h=365&w=240&dpr=2",
        
        name:"Nike",
        discription:"Delia Woven Dress",
        price:24.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/4e8a17b7-89c2-4764-a51f-01dc8be2e252.jpeg?h=365&w=240&dpr=2",
       
        name:"Zella",
        discription:"Dri-FIT Training T-Shirt",
        price:28.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/6cbac5f3-bda8-4737-bf5a-ae01d53c1ca0.jpeg?h=365&w=240&dpr=2",
        
        name:"90 DEGREE BY REFLEX",
        discription:"High-Low Full Jacket",
        price:28.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/5641673e-da20-4dfd-9f2e-d56eb07294e4.jpeg?h=365&w=240&dpr=2",
        
        name:"Nike",
        discription:"Delia Woven Dress",
        price:15.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/0202f7f8-5b79-4aae-85c9-5fe09f0a2a7b.jpeg?h=365&w=240&dpr=2",
       
        name:"Z by Zella",
        discription:"Motion Tank Dress",
        price:18.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/d2a1f37d-8692-400d-bfa3-127f84801978.jpeg?h=365&w=240&dpr=2",
        
        name:"90 DEGREE BY REFLEX",
        discription:"High-Low Full Jacket",
        price:24.99,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/24ea4d93-6c2a-410e-b571-3d3b6e3b09cd.jpeg?h=365&w=240&dpr=2",
       
        name:"Nike",
        discription:"Dri-FIT Training T-Shirt",
        price:16.97,
        btn : "Add To Cart",
        delivery:"Free Shipping on Orders $89+",
    },
    {
        img_url:"https://n.nordstrommedia.com/id/sr3/2ba49ac4-8a73-4437-9701-ee9e1cab16d6.jpeg?h=365&w=240&dpr=2",
       
        name:"Nike",
        discription:"Dri-FIT Training T-Shirt",
        price:22.97,
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
        // innerDiv.querySelector("#main").append(innerDiv);
        let pic = document.createElement("img");
        pic.setAttribute("class","wPic");
        pic.src = elem.img_url;

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
        if(wData[i].img_url === elem.img_url && wData[i].name === elem.name && wData[i].discription === elem.discription && wData[i].price === elem.price){

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