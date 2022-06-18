
// let userData = JSON.parse(localStorage.getItem("uCart")) || [];

// console.log(userData)

    let womensData = [
    {
            img_url:"https://n.nordstrommedia.com/id/sr3/bd22d1c7-3243-416c-9423-54a5320991a2.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Dri-FIT Training T-Shirt",
            price:26.00,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/65c30134-0e1e-49b4-811e-35c09b8de97f.jpeg?h=365&w=240&dpr=2",
           
            name:"90 DEGREE BY REFLEX",
            discription:"Interval Woven Run Shorts",
            price:19.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/d94bf767-3420-4b95-a58c-ed36066b7bb6.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Seamless Crossback Bralette",
            price:7.48,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/62ece1ca-c4eb-4331-a689-65ff37083216.jpeg?h=365&w=240&dpr=2",
            
            name:"Nike",
            discription:"Attack Sport Shorts",
            price:26.00,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/5283e94e-319f-4cb7-95af-9132ed903539.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Interval Woven Run Shorts",
            price:17.23,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },

        {
            img_url:"https://n.nordstrommedia.com/id/sr3/38a7da46-7892-47de-a5bb-3329c935fbd5.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Motion Tank Dress",
            price:34.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/aa55550b-5d90-422f-bcb3-683b7b19a779.jpeg?h=365&w=240&dpr=2",
          
            name:"90 DEGREE BY REFLEX",
            discription:"Ribbed Racerback Tank Top",
            price:19.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/20be7366-f503-4197-bec3-eb29967c32df.jpeg?h=365&w=240&dpr=2",
            name:"Z by Zella",
            discription:"Training Racerback Tank",
            price:14.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/e7f8b0e6-c4d1-4ef8-8ae7-bf46a83ff9e4.jpeg?h=365&w=240&dpr=2",
           
            name:"90 DEGREE BY REFLEX",
            discription:"Oversized Boxy Crop T-Shirt",
            price:15.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/c06274df-26be-4854-a24b-1e941a460bbd.jpeg?h=365&w=240&dpr=2",
           
            name:"Zella",
            discription:"Dri-FIT Training T-Shirt",
            price:28.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/ddf4734e-7db3-4a60-9377-1f81e3656774.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Low Cut Sport Socks",
            price:9.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/0487a115-f157-42cb-b95a-32fd08308908.jpeg?h=365&w=240&dpr=2",
            
            name:"Nike",
            discription:"Delia Woven Dress",
            price:24.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },

        {
            img_url:"https://n.nordstrommedia.com/id/sr3/6cef69b0-745a-4e47-830d-f631314cbad7.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Hailey Ribbed Hoodie",
            price:19.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/f342635d-90df-48f2-b33b-04d65aa34f35.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full Jacket",
            price:34.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/5d66a01f-5a01-4c30-8237-909b4a68d544.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Dri-FIT Training T-Shirt",
            price:19.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/9986c0e5-13d7-474d-a121-ff9fd58ee6c4.jpeg?h=365&w=240&dpr=2",
            
            name:"Nike",
            discription:"Delia Woven Dress",
            price:24.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/c06274df-26be-4854-a24b-1e941a460bbd.jpeg?h=365&w=240&dpr=2",
           
            name:"Zella",
            discription:"Dri-FIT Training T-Shirt",
            price:28.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/a3bd9455-027e-4a91-861a-0e71d86fb1c3.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full Jacket",
            price:28.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/ee11ef59-99d1-4264-b3fd-99b64813377f.jpeg?h=365&w=240&dpr=2",
            
            name:"Nike",
            discription:"Delia Woven Dress",
            price:15.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/f1dcfea2-51aa-48d6-afe8-dc18d06cdcbd.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Motion Tank Dress",
            price:18.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/e0ff5de3-b0c7-4dc9-ac54-69ace80560da.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full Jacket",
            price:24.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/1fc3f3f7-4898-4d38-b4d2-adb04d0746ee.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Dri-FIT Training T-Shirt",
            price:16.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/977fbffb-89bd-4ece-ab9a-7070be1a6672.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Dri-FIT Training T-Shirt",
            price:22.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/5b5f3a93-f851-4e2b-b19a-7038260ca631.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Low Cut Sport Socks",
            price:19.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/1af4f56c-b253-437a-a6e6-3ca68c820562.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Low Cut Sport Socks",
            price:19.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/e5e3c42f-8df4-47f6-825d-6bc1443066e4.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full Jacket",
            price:26.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/e926fa8e-b257-4a7c-8af6-3a94060a48c2.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full Jacket",
            price:6.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/2647d821-1193-4bfd-865a-4c13313af68a.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full Jacket",
            price:32.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/38c1f364-2a6e-40b1-8436-83d7d0075eb0.jpeg?h=365&w=240&dpr=2",
            
            name:"90 DEGREE BY REFLEX",
            discription:"High-Low Full Jacket",
            price:47.99,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/229131ae-3b96-46b9-889d-bf5bf7e5a180.jpeg?h=365&w=240&dpr=2",
           
            name:" Zella",
            discription:"Motion Tank Dress",
            price:34.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/56712fa4-b317-43a7-bdaa-94b68f8028b0.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Motion Tank Dress",
            price:18.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/cf95da93-6162-498c-a6aa-f1f59ae1ceed.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Motion Tank Dress",
            price:12.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/6cd168bf-95aa-4f36-92c0-41bf50c55b69.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Motion Tank Dress",
            price:36.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },
        {
            img_url:"https://n.nordstrommedia.com/id/sr3/4cca42a5-35f6-491f-b2c8-5c7be40ee0c6.jpeg?h=365&w=240&dpr=2",
           
            name:"Z by Zella",
            discription:"Motion Tank Dress",
            price:18.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },

        {
            img_url:"https://n.nordstrommedia.com/id/sr3/8e8fef69-a6d0-413e-b758-648536cb7287.jpeg?h=365&w=240&dpr=2",
           
            name:"Zella",
            discription:"Motion Tank Dress",
            price:18.97,
            btn : "Add To Cart",
            delivery:"Free Shipping on Orders $89+",
        },{
            img_url:"https://n.nordstrommedia.com/id/sr3/38c1f364-2a6e-40b1-8436-83d7d0075eb0.jpeg?h=365&w=240&dpr=2",
           
            name:"Nike",
            discription:"Motion Tank Dress",
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
            
            innerDiv.addEventListener("click",function(){
                addToCart(elem);
            });



            innerDiv.append(pic,nam, des, cost,btns, ship);
            main.append(innerDiv);
    
        });
    }
    let data = JSON.parse(localStorage.getItem("uCart"));

    


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





    displayData(womensData);


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
            } );

            displayData(womensData);
            console.log(womensData);
        };
    }