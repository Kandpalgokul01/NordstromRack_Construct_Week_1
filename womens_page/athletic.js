// let userData = JSON.parse(localStorage.getItem("uCart")) || [];
    let womensData = [
    {
            img_url:"https://n.nordstrommedia.com/id/sr3/b8f39ba3-5706-48e7-8167-7ef3278c10bb.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Revolution 6 Running Shoe (Women)",
            price:43.00,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/0aea5d46-f908-4b16-843c-0580e0088665.jpeg?h=365&w=240&dpr=2",
           
            name:"New Markdown",
            discription:"Tragrant Slide Sandal",
            price:11.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/a3ffb9c1-d9e9-4614-a47f-8c475fbe181a.jpeg?h=365&w=240&dpr=2",
           
            name:"Adidas",
            discription:"Reposto Sneaker ",
            price:53.48,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/6060884a-279d-483e-98a8-e6c9edad1e2e.jpeg?h=365&w=240&dpr=2",
            
            name:"Nike",
            discription:"Attack Sport Shorts",
            price:26.00,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/9b9fcc35-8c37-4d25-81e4-3b98702a4668.jpeg?h=365&w=240&dpr=2",
           
            name:"New Markdown",
            discription:"Interval Woven Run Shorts",
            price:27.23,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },

        {
            img_url:"https://n.nordstrommedia.com/id/sr3/bd9578ca-4db0-4bc8-835f-644637cbe270.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Court Vision Low Sneaker",
            price:56.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/a72634af-1346-416a-8246-9041f5d1afbe.jpeg?h=365&w=240&dpr=2",
          
            name:"adidas",
            discription:"Ribbed Racerback Tank Top",
            price:19.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/2620b785-eee7-4b87-96d9-fae8de10bc39.jpeg?h=365&w=240&dpr=2",
            name:"ASICS",
            discription:"Training Racerback Tank",
            price:59.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/2e3547ef-afc8-4f86-b84e-3d23b4ea3a3b.jpeg?h=365&w=240&dpr=2",
           
            name:"PUMA",
            discription:"Court Vision Low Sneaker",
            price:44.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/e53e14bf-87c4-467d-89bf-fceaad999d69.jpeg?h=365&w=240&dpr=2",
           
            name:"Zella",
            discription:"Tanjun Sneaker ",
            price:48.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/3a707453-9dc8-40c4-941d-ea03a09dcdfb.jpeg?h=365&w=240&dpr=2",
           
            name:"Adidas",
            discription:"Sneaker (Women)",
            price:42.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/9182abd2-f466-412f-a608-fa849c9e4588.jpeg?h=365&w=240&dpr=2",
            
            name:"Nike",
            discription:"Delia Woven ",
            price:24.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },

        {
            img_url:"https://n.nordstrommedia.com/id/sr3/a8bba5ff-4516-43fb-8421-e15d4398ab31.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Hailey Ribbed",
            price:69.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/21a1365f-1c47-448f-84d4-f6f2c6f676de.jpeg?h=365&w=240&dpr=2",
            
            name:"NRGS Sneaker",
            discription:"High-Low ",
            price:34.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/7072f59c-a00f-4c1b-8ac3-7ab35f8afcaf.jpeg?h=365&w=240&dpr=2",
           
            name:"ASICS®",
            discription:"Dri-FIT Training",
            price:19.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/80d19a75-5a33-4975-bfcd-b84b7eb631f7.jpeg?h=365&w=240&dpr=2",
            
            name:"PUMA",
            discription:"Delia Woven ",
            price:24.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/c24beeef-ba1d-4421-9c5e-ee608f51d5ee.jpeg?h=365&w=240&dpr=2",
           
            name:"Adidas",
            discription:"Dri-FIT Training",
            price:28.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/022073b3-4d54-44f6-8fd5-317d820ccfca.jpeg?h=365&w=240&dpr=2",
            
            name:"Nike",
            discription:"High-Low Full",
            price:43.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/551e3b4b-9d2f-4167-af83-26ab36da5577.jpeg?h=365&w=240&dpr=2",
            
            name:"Nike",
            discription:"Delia Woven ",
            price:15.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/29782234-4cd1-4bdc-b25e-f871ddb5d607.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Motion Tank shoes",
            price:63.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/fa235eda-8825-4c92-9f6b-23240e0f9d60.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full",
            price:49.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/bd72df2c-2dd3-4626-b82f-e8969aa502d8.jpeg?h=365&w=240&dpr=2",
           
            name:"Saucony",
            discription:"Dri-FIT Training",
            price:76.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/4acafc74-ec11-45a0-b1ec-cc2d6d6b4c03.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Sneaker (Women)",
            price:56.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/d14ba230-cd1e-4451-9efc-1cee41ce8588.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Low Cut Sport Shoes",
            price:19.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/0a2ec87a-f251-4f36-a003-1618361dd470.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Low Cut Sport Shoes",
            price:49.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/6a6e40a4-17a2-48a7-836a-27d7cf153754.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full ",
            price:62.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/b7594ae0-1606-4805-9b51-81ded1efb98d.jpeg?h=365&w=240&dpr=2",
            
            name:"ASICS®",
            discription:"Nylite Sneaker ",
            price:36.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/5f93150a-6f98-46ac-80fb-9298bcd1f164.jpeg?h=365&w=240&dpr=2",
            
            name:"PUMA",
            discription:"High-Low Full",
            price:12.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/092c7b67-27d8-4631-a243-e5b71d391a51.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"Womens shoes",
            price:47.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/e93a19ae-f3ee-44fa-9f9d-6436e9be91d3.jpeg?h=365&w=240&dpr=2",
           
            name:" Zella",
            discription:"Motion Tank ",
            price:34.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/0c4de3a9-e471-430c-ace5-d40926a7cf6b.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Motion Running shoes",
            price:18.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/5592bf7e-7c1b-49e9-97b5-0babfcd877ee.jpeg?h=365&w=240&dpr=2",
           
            name:"PUMA",
            discription:"Sneakers",
            price:12.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/e8c4212a-983e-44ea-981f-a0059b9cb8b0.jpeg?h=365&w=240&dpr=2",
           
            name:"PUMA",
            discription:"Outfit sneakers",
            price:36.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/ba9c9bc0-96d2-4f37-910d-7fc3dcfb2285.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Nylite' Sneaker",
            price:18.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },

        {
            img_url:"https://n.nordstrommedia.com/id/sr3/e2a126a1-5d94-4c5e-a3e1-c49e02a96fd8.jpeg?h=365&w=240&dpr=2",
           
            name:"Zella",
            discription:"Nylite' Sneaker",
            price:18.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/9d189315-07ce-4c8c-a666-78ae4765503b.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Womens sneakers",
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