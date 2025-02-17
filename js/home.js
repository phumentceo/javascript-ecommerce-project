const categories = [
    {
        "id" : 1,
        "name" : "Phone",
        "stock" : 50,
        "image" : "https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj.jpg",
        "description" : "Phone new stock"
    },
    {
       "id" : 2,
       "name" : "Computer",
       "stock" : 50,
       "image" : "https://thumbs.dreamstime.com/z/variety-computers-both-laptop-desktops-sale-computer-store-computers-sale-computer-store-135429635.jpg",
       "description" : "Computer new stock" 
    },
    {
        "id" : 3,
        "name" : "Watch",
        "stock" : 20,
        "image" : "https://images.squarespace-cdn.com/content/v1/55e87a4ae4b0ef4233ddf7a9/1444399319901-ND4DBMDC9FZTIHHDT6O0/IMG_0297.JPG",
        "types" :[
            {
                "id" : 1,
                "name" : "Men"
            },
            {
                "id" : 2,
                "name" : "Women"
            }
        ],
        "description" : "Watch new stock"
    }
];

const slides = [
    {
        "id"    : 1,
        "name"  : "Phone",
        "image" : "https://media.product.which.co.uk/prod/images/original/f4e8c0ef7c7b-phones-vertical-header.jpg"
    },
    {
        "id"   : 2,
        "name" : "Computer",
        "image": "https://allgen.com/wp-content/uploads/2019/11/san-antonio-computer-store-parts-department.jpg"
    },
    {
        "id"   : 3,
        "name" : "Watch",
        "image": "https://rotarywatches.com/cdn/shop/files/Rotary_seamatic_yellow_dial_desktop_banner.png?v=1729177044&width=3200"
    }
]

//Ctr + F
const products = [
    // iPhones
    {
      "id": 1,
      "category": "Phone",
      "name": "iPhone 15",
      "brand": "Apple",
      "qty"  : 10,
      "img": [
        {
          "id": 1,
          "name": "https://mobileleb.com/cdn/shop/files/apple-mobile-phone-apple-iphone-15-128gb-33291194957956_1200x1200.jpg?v=1694765742",
        },
        {
          "id": 2,
          "name": "https://mac-center.com/cdn/shop/files/IMG-10935071_e8d611ec-53bf-4319-8326-91c29d1bbc3b.jpg?v=1723749149&width=823"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(173, 216, 230)"
        },
        {
          "id": 2,
          "name": "rgb(144, 238, 144)"
        }
      ],
      "oldPrice": 999,
      "newPrice": 949,
      "description": "The latest iPhone 15 offering advanced features and a sleek design."
    },
    {
      "id": 2,
      "category": "Phone",
      "name": "iPhone 15 Pro",
      "brand": "Apple",
      "qty"  : 10,
      "img":
        [{
          "id": 1,
          "name": "https://cdn.revendo.com/media/b2/84/b0/1696889157/apple-iphone-15-pro-max-titan-weiss-guenstig-gebraucht-kaufen-00.png.png",
  
        },
        {
          "id": 2,
          "name": "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2Fi_Phone_1280x853px_15_Pro_f772b99f3a.png&w=3840&q=75"
        }
        ],
      "oldPrice": 1099,
      "newPrice": 1049,
      "description": "Experience pro-level performance and camera quality with the iPhone 15 Pro."
    },
    {
      "id": 3,
      "category": "Phone",
      "name": "iPhone 15 Pro Max",
      "brand": "Apple",
      "qty"  : 10,
      "img": "https://www.istudiobyspvi.com/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__GBEN_c8ffdd92-450a-42c5-a88a-d1037806902d.jpg?v=1718116846&width=1445",
      "img": [
        {
          "id": 1,
          "name": "https://www.istudiobyspvi.com/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__GBEN_c8ffdd92-450a-42c5-a88a-d1037806902d.jpg?v=1718116846&width=1445",
  
        },
        {
          "id": 2,
          "name": "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-pro-5g/grey.png"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 1199,
      "newPrice": 1149,
      "description": "The iPhone 15 Pro Max delivers unmatched power and a stunning display."
    },
    {
      "id": 4,
      "category": "Phone",
      "name": "iPhone 15 Plus",
      "brand": "Apple",
      "qty"  : 10,
      "img": "https://soklyphone.com/storage/Apple/iphone/iPhone-15-Plus/iphone-15-plus-yellow-1696496872IIcjN.png",
      "img":"https://arystorephone.com/wp-content/uploads/2023/09/iphone-15-plus-blue.jpg",
      "img": [
        {
          "id": 1,
          "name": "https://soklyphone.com/storage/Apple/iphone/iPhone-15-Plus/iphone-15-plus-yellow-1696496872IIcjN.png",
  
        },
        {
          "id": 2,
          "name": "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-pro-5g/grey.png"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 1049,
      "newPrice": 999,
      "description": "Enjoy a larger screen and top performance with the iPhone 15 Plus."
    },
    // Oppo Phones
    {
      "id": 5,
      "category": "Phone",
      "name": "Oppo Find X8 Pro",
      "brand": "Oppo",
      "qty"  : 10,
  
      "img": [
        {
          "id": 1,
          "name": "https://www.spark.co.nz/content/dam/spark/images/product-images/devices/phones/oppo/oppo-find-x8-pro/oppo_find_x8_pro_white_1.png",
  
        },
        {
          "id": 2,
          "name": "https://shop.oppomobile.nz/cdn/shop/files/OPPO-Find-X8-Space-Black-Pro-2UP-_-Lock-Up.png?v=1737458098&width=800"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(255, 255, 255)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 1099,
      "newPrice": 1049,
      "description": "Oppo Find X8 Pro offers innovative features and a futuristic design."
    },
    {
      "id": 6,
      "category": "Phone",
      "name": "Oppo Reno13 Pro 5G",
      "brand": "Oppo",
      "qty"  : 10,
      // "img": "https://down-my.img.susercontent.com/file/my-11134207-7rasi-m32zmjjduuuacc",
      "img": [
        {
          "id": 1,
          "name": "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-pro-5g/purple.png",
  
        },
        {
          "id": 2,
          "name": "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-pro-5g/grey.png"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 799,
      "newPrice": 749,
      "description": "Experience 5G speed and exceptional camera quality with the Oppo Reno8 Pro 5G."
    },
    {
      "id": 7,
      "category": "Phone",
      "name": "Oppo F27 Pro",
      "brand": "Oppo",
      "qty"  : 10,
      // "img": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/oppo-f27-pro-5g-1.png",
      "img": [
        {
          "id": 1,
          "name": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/oppo-f27-pro-5g-1.png",
  
        },
        {
          "id": 2,
          "name": "https://www.oppo.com/content/dam/oppo-campaign-site/in/events/oppo-product/image-link/march-2023/OPPO_F27_Pro+_5G_Midnight_Navy_frontback_1200x1200.jpg"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 699,
      "newPrice": 649,
      "description": "The Oppo F27 Pro packs advanced technology and an elegant design."
    },
    {
      "id": 8,
      "category": "Phone",
      "name": "Oppo A96",
      "brand": "Oppo",
      "qty"  : 10,
      // "img": "https://ares.shiftdelete.net/2024/11/oppo-a5-pro-600x600.webp",
      "img": [
        {
          "id": 1,
          "name": "https://ares.shiftdelete.net/2024/11/oppo-a5-pro-600x600.webp",
  
        },
        {
          "id": 2,
          "name": "https://www.themobileindian.com/wp-content/uploads/2024/12/Oppo-A5-Pro-specs.jpg"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(132, 182, 220)"
        },
        {
          "id": 2,
          "name": "rgb(160, 36, 28)"
        }
      ],
      "oldPrice": 499,
      "newPrice": 459,
      "description": "Oppo A96 offers great value with reliable performance and a stylish look."
    },
    // Huawei Phones
    {
      "id": 9,
      "category": "Phone",
      "name": "HUAWEI nova 13 Pro",
      "brand": "Huawei",
      "qty"  : 10,
      // "img": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp-x/phones/winter-2024-new-product-launch/phones-new/images/nova-series/shelf-huawei-nova13-pro.png",
      "img": [
        {
          "id": 1,
          "name": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp-x/phones/winter-2024-new-product-launch/phones-new/images/nova-series/shelf-huawei-nova13-pro.png",
  
        },
        {
          "id": 2,
          "name": "https://cdn.droidchart.com/p/92/9246/huawei-nova-13-pro-mis-al00-7.jpg"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 599,
      "newPrice": 550,
      "description": "The HUAWEI nova 13 Pro features a cutting-edge camera system and sleek design."
    },
    {
      "id": 10,
      "category": "Phone",
      "name": "HUAWEI Mate 50 Pro",
      "brand": "Huawei",
      "qty"  : 10,
      // "img": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp-x/phones/winter-2024-new-product-launch/phones-new/images/mate-series/shelf-huawei-mate50-pro.png",
      "img": [
        {
          "id": 1,
          "name": "https://cacellular.co.za/wp-content/uploads/2024/09/HUAWEI-Mate50-Pro-Orange-1.jpg",
  
        },
        {
          "id": 2,
          "name": "https://img01.huaweifile.com/sg/ms/ph/pms/uomcdn/PH_HW_B2B2C/pms/202211/gbom/6941487280469/800_800_B114E788B5C5427B8D9EC1FFE1186767mp.jpg"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 999,
      "newPrice": 949,
      "description": "Experience top-tier performance and innovative design with the HUAWEI Mate 50 Pro."
    },
    {
      "id": 11,
      "category": "Phone",
      "name": "HUAWEI Pura 70 Ultra",
      "brand": "Huawei",
      "qty"  : 10,
  
      "img": [
        {
          "id": 1,
          "name": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp-x/phones/winter-2024-new-product-launch/phones-new/images/pura-series/shelf-huawei-pura70-ultra.png",
  
        },
        {
          "id": 2,
          "name": "https://ssscellular.co.za/wp-content/uploads/2024/05/white.png"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 699,
      "newPrice": 649,
      "description": "HUAWEI Pura 70 Ultra offers an exceptional balance of performance and design."
    },
    {
      "id": 12,
      "category": "Phone",
      "name": "HUAWEI Pura 70 Pro",
      "brand": "Huawei",
      "qty"  : 10,
      // "img": "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/phones/winter-2024-new-product-launch/phones-new/images/pura-series/shelf-huawei-pura70-pro-white.png",
      "img": [
        {
          "id": 1,
          "name": "https://www.greentelcom.ph/wp-content/uploads/2024/07/Huawei-Pura-70-2-min.png",
  
        },
        {
          "id": 2,
          "name": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrR4h2UtJmARWuSBtGoteoruAYnpGt2hxxQ&s"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 999,
      "newPrice": 949,
      "description": "The HUAWEI Pura 70 Pro delivers high performance and a premium design."
    },
    // Computer item
    {
      "id": 13,
      "category": "Computer",
      "name": "Dell Inspiron 15",
      "brand": "Dell",
      "qty"  : 10,
      "img": "https://soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-GT-5-Pro/46-mm/black-fluoroelastomer-strap-2-1733383112CNQR1.png",
      "img":[
        {
          "id":1,
          "name":"https://soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-GT-5-Pro/46-mm/black-fluoroelastomer-strap-1733369067ZWX78.png"
        },
        {
          "id":2,
          "name":"https://soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-GT-5-Pro/46-mm/titanium-strap-1733369068gGelY.png"
  
        }
      ],
      "oldPrice": 749,
      "newPrice": 699,
      "description": "Dell Inspiron 15 offers reliable performance and a sleek design, perfect for everyday computing."
    },
    {
      "id": 14,
      "category": "Computer",
      "name": "Dell XPS Desktop",
      "brand": "Dell",
      "qty"  : 10,
      "img": "https://via.placeholder.com/300?text=Dell+XPS+Desktop",
      "oldPrice": 1299,
      "newPrice": 1249,
      "description": "Dell XPS Desktop delivers exceptional performance and cutting-edge technology for professional users."
    },
    {
      "id": 15,
      "category": "Computer",
      "name": "Dell All-in-One 27",
      "brand": "Dell",
      "qty"  : 10,
      "img": "https://via.placeholder.com/300?text=Dell+All-in-One+27",
      "oldPrice": 999,
      "newPrice": 949,
      "description": "Dell All-in-One 27 features a large display and integrated design, ideal for both work and leisure."
    },
    {
      "id": 16,
      "category": "Computer",
      "name": "Dell Convertible 2-in-1",
      "brand": "Dell",
      "qty"  : 10,
      "img": "https://via.placeholder.com/300?text=Dell+Convertible+2-in-1",
      "oldPrice": 1199,
      "newPrice": 1149,
      "description": "Experience the versatility of a laptop and tablet in one device with the Dell Convertible 2-in-1."
    },
    {
      "id": 17,
      "category": "Watch",
      "name": "Apple Watch Series 10",
      "brand": "Apple",
      "qty"  : 10,
      // "img": "https://i5.walmartimages.com/asr/948cd6b9-1c5c-44dc-84d9-1fda6797e871.4a62aa32189952706f49a04c610c9fd0.jpeg",
      "img": [
        {
          "id": 1,
          "name": "https://i5.walmartimages.com/asr/948cd6b9-1c5c-44dc-84d9-1fda6797e871.4a62aa32189952706f49a04c610c9fd0.jpeg",
  
        },
        {
          "id": 2,
          "name": "https://www.jibalzone.com/media/7377/conversions/66fe80d19cb75_273622989471774__86183-slider.jpg"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(190, 142, 45)"
        },
        {
          "id": 2,
          "name": "rgb(255, 255, 255)"
        }
      ],
      "oldPrice": 399,
      "newPrice": 379,
      "description": "The latest Apple Watch Series 9 features advanced health tracking and seamless connectivity."
    },
    {
      "id": 18,
      "category": "Watch",
      "name": "Samsung Galaxy Watch 6",
      "brand": "Samsung",
      "qty"  : 10,
      // "img": "https://images.samsung.com/is/image/samsung/p6pim/ca/sm-r861nzkaxac/gallery/ca-galaxy-watch-fe-r861-sm-r861nzkaxac-thumb-542427451?$360_360_PNG$",
      "img": [
        {
          "id": 1,
          "name": "https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-r861nidamea/gallery/africa-en-galaxy-watch-fe-r861-sm-r861nidamea-542757296?$684_547_PNG$",
  
        },
        {
          "id": 2,
          "name": "https://images.samsung.com/is/image/samsung/p6pim/ca/sm-r861nzkaxac/gallery/ca-galaxy-watch-fe-r861-sm-r861nzkaxac-thumb-542427451?$360_360_PNG$"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(175, 100, 186)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 349,
      "newPrice": 329,
      "description": "Samsung Galaxy Watch 6 combines modern design with innovative health tracking features."
    },
    {
      "id": 19,
      "category": "Watch",
      "name": "Fossil Gen 8 Smartwatch",
      "brand": "Fossil",
      "qty"  : 10,
      // "img": "https://imagescdn.thecollective.in/img/app/product/4/463982-3663667.jpg?w=500&auto=format",
      "img": [
        {
          "id": 1,
          "name": "https://imagescdn.thecollective.in/img/app/product/4/463982-3663667.jpg?w=500&auto=format",
  
        },
        {
          "id": 2,
          "name": "https://assets.ajio.com/medias/sys_master/root/20210129/Vxtm/6014251baeb26969815956af/-473Wx593H-4916157650-multi-MODEL.jpg"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(194, 146, 4)"
        },
        {
          "id": 2,
          "name": "rgb(255, 255, 255)"
        }
      ],
      "oldPrice": 299,
      "newPrice": 279,
      "description": "Fossil Gen 6 offers a classic design paired with modern smartwatch functionality."
    },
    {
      "id": 20,
      "category": "Watch",
      "name": "Garmin Fenix 8",
      "brand": "Garmin",
      "qty"  : 10,
      // "img": "https://www.garmin.com.sg/m/sg/g/products/fenix-8-amoled-51-orange-cf-lg.jpg",
      "img": [
        {
          "id": 1,
          "name": "https://www.garmin.com.sg/m/sg/g/products/fenix-8-amoled-51-orange-cf-lg.jpg",
  
        },
        {
          "id": 2,
          "name": "https://laatukoru.fi/cdn/shop/files/Garmin_Fenix8_51_mm_Amoled_Sapphire_hiilenharmaa_titaani_ja_musta_alykello_010_02905_21_1080x.jpg?v=1724762920"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(194, 146, 4)"
        },
        {
          "id": 2,
          "name": "rgb(0, 0, 0)"
        }
      ],
      "oldPrice": 699,
      "newPrice": 649,
      "description": "Garmin Fenix 7 is built for adventurers with robust tracking features and a durable design."
    }
  
];



var categoryShow = document.querySelector(".categories-block");


categories.map((item,index) => {
    
    if(item.types){
        let dropdownMenu = ``;

        dropdownMenu += `
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               ${item.name}
            </a>
            <ul class="dropdown-menu">`;

            item.types.map((value) => {
                dropdownMenu += `<li><a class="dropdown-item" href="#">${value.name}</a></li>`;
            })

                // <li><a class="dropdown-item" href="#">Men</a></li>
                // <li><a class="dropdown-item" href="#">Woment</a></li>

           dropdownMenu += `</ul>
        </li>
        `;

        categoryShow.innerHTML += dropdownMenu;

    }else{
        let menu = ``;

        menu += `
        <li class="nav-item">
           <a class="nav-link text-light" href="#">${item.name}</a>
        </li>
        `;

        categoryShow.innerHTML += menu;
    }
})


var showSlides = document.querySelector(".carousel-inner");

slides.map((value,index) => {
    let slideHtml = ``;

    slideHtml += `
    <div class="carousel-item ${index == 0 ? 'active' : ''}" data-bs-interval="${index == 0 ? '5000' : '3000' }">
        <img src="${value.image}" class="d-block w-100" alt="...">
    </div>
    `;

    showSlides.innerHTML += slideHtml;
});


var showCategoryLeft  = document.querySelector(".category-left");
var showCategoryRight = document.querySelector(".category-right");


categories.map((value,index) => {
    if(index !=2){
        let leftInner = ``;
        leftInner += `
            <div class="col-12 category-data mb-2 ps-lg-0">
                <div class="card">
                    <img src="${value.image}" alt="">
                    <div class="description">
                        <h2>${value.name}</h2>
                        <p>${value.description}</p>
                        <p>${value.stock} product</p>
                    </div>
                    <div class="opacity"></div>
                </div>
            </div>
        `;

        //inner to html
        showCategoryLeft.innerHTML += leftInner;
    }else{
        let rightInner = ``;

        rightInner += `
        <div class="card">
            <img class="cate-watch" src="${value.image}" alt="">
            <div class="description">
                <h2>${value.name}</h2>
                <p>${value.description}</p>
                <p>${value.stock} product</p>
            </div>
            <div class="opacity-watch"></div>
        </div>
        `;

        //inner to html
        showCategoryRight.innerHTML += rightInner;
    }
});


var showProducts = document.querySelector(".show-all-products");

products.slice(0,12).map((product) => {
    let html = ``;

    html += `
            <div class="col-lg-3 ps-md-0 col-md-6 mb-3 product">
                  <div class=" card shadow-sm ">
                      <img class="" src="${product.img[0].name}" alt="">

                      <div class="card-body p-4">
                         <h5>${product.name}</h5>
                         <del  class=" badge bg-danger">$${product.oldPrice}</del>
                         <span class=" badge bg-success">$${product.newPrice}</span>

                         <div class="detail d-flex justify-content-center align-items-center">
                          <i onclick="productModal(${product.id})" data-bs-toggle="modal" data-bs-target="#viewProduct" class="bi bi-search"></i>
                          <i class="bi bi-heart"></i>
                          <i onclick="addTocart(${product.id})" class="bi bi-cart-plus"></i>
                         </div>

                      </div>
                  </div>
            </div>
    `;

    showProducts.innerHTML += html;
})



//Modal function
const productModal = (id) => {
    
    let modalShow   = document.querySelector('.show-single-product');

    let productFind = products.find(product => product.id == id);

    modalShow.innerHTML = `
                <div class="row p-0 m-0">

                    <div class="col-lg-7 col-md-6 col-sm-6">
                       <img class="image-modal" src="${productFind.img[0].name}" alt="">
                    </div>

                    <div class="col-lg-5 col-md-6 col-sm-6">

                       <h4>${productFind.name}</h4>
                       <p> <span class=" badge bg-success">$${productFind.newPrice}</span> FOR SALE </p>
                       <p class=" opacity-75">${productFind.description}</p>

                       <div class="qty-control my-4">
                         <button class=" border-0 bg-danger text-light">-</button>
                         <input type="text" id="product_qty" value="1" style="width: 50px;" readonly>
                         <button onclick="increment(this,${productFind.id})" class=" border-0 bg-success text-light">+</button>
                       </div>

                       <button onclick="addTocart(${productFind.id})" class=" btn btn-primary">add to cart</button>

                       <div class=" mt-2">
                        <a href="" class=" opacity-75 text-dark">view product detail</a>
                       </div>

                    </div>

                </div>
    `;
    
}


const increment = (e,id) => {

    let parent = e.parentElement;  //get parrentElement of function
    let qtyInput = parent.querySelector("#product_qty");

    let checkQty = products.find(item => item.id == id);


    if(checkQty.qty == qtyInput.value ){
      message(`${checkQty.name} is out stock`,false);
    }else{
      qtyInput.value = parseInt(qtyInput.value) + 1;
    }
   
}

const decrement = () => {

}


const message = (text,status) => {
  Toastify({
    text: `${text}`,
    duration: 1000,
    destination: "https://github.com/apvarun/toastify-4js",
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: `${status == true ? 'green' : 'red'}`,
    },
    onClick: function(){} // Callback after click
  }).showToast();
}



var itemsCart = JSON.parse(localStorage.getItem('cart')) || [];

const addTocart = (id) => {
  
  let productFind = products.find(product => product.id == id);

  let productExist = itemsCart.find(product => product.id == id);

  // ចាប់យកតម្លៃ qty ពី input
  // 1.
  let qty = parseInt(document.querySelector("#product_qty").value);

  if(productExist){
    message(`${productFind.name} has been added.`, false);
    return false;
  }

  // Push product with quantity
  //2.
  itemsCart.push({...productFind, cartItemQty: qty});

     /*
     {
      "id": 1,
      "category": "Phone",
      "name": "iPhone 15",
      "cartItemQty" : 5,
      "brand": "Apple",
      "qty"  : 10,
      "img": [
        {
          "id": 1,
          "name": "https://mobileleb.com/cdn/shop/files/apple-mobile-phone-apple-iphone-15-128gb-33291194957956_1200x1200.jpg?v=1694765742",
        },
        {
          "id": 2,
          "name": "https://mac-center.com/cdn/shop/files/IMG-10935071_e8d611ec-53bf-4319-8326-91c29d1bbc3b.jpg?v=1723749149&width=823"
        }
      ],
      "color": [
        {
          "id": 1,
          "name": "rgb(173, 216, 230)"
        },
        {
          "id": 2,
          "name": "rgb(144, 238, 144)"
        }
      ],
      "oldPrice": 999,
      "newPrice": 949,
      "description": "The latest iPhone 15 offering advanced features and a sleek design."
    },
   */
  
  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(itemsCart));

  // Alert message
  message(`${productFind.name} added to cart successfully`, true);

  // Close modal 
  $("#viewProduct").modal('hide');

  // Render cart 
  randerCart();
}


const deleteCart = (id) => {
  if(confirm('Do you want to delete this?')){

    itemsCart = itemsCart.filter(product => product.id != id);

    localStorage.setItem('cart',JSON.stringify(itemsCart));

    message(`Product delete success`,true);

    // Check if cart is empty and close offcanvas using jQuery
    if (itemsCart.length === 0) {
      $('.offcanvas').offcanvas('hide'); // Close the offcanvas
    }

    randerCart();

  }
}

const randerCart = () => {
  let cartShow = document.querySelector(".cart-items-list");
  let html = ``;

  itemsCart.map(product => {
    html += `
      <div class="cart-item d-flex justify-content-between align-items-center mb-2">
        <img style="width: 70px;" src="${product.img[0].name}" alt="">
        <p><span class=" badge bg-success">$${product.newPrice}</span></p>
        <p>Quantity: ${product.cartItemQty}</p>
        <button onclick="deleteCart(${product.id})" class="btn btn-sm btn-danger">Remove</button>
      </div>
    `;
  });

  cartShow.innerHTML = html;
}



randerCart();