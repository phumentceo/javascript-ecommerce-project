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


const products = [
    {
        "id"   : 1,
        "name"   : "Oppo A53 4G Smartphone",
        "old_price" : 250,
        "new_price" : 240,
        "category" : "Phone",
        "brand"  : "OPPO",
        "images" : [
            {
                "id" : 1,
                "name" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9G8FW5YkLQTwwug7BJ_N0zY_UB2N7YyYbw&s"
            },
            {
                "id" : 2,
                "name" :  "https://bf1af2.a-cdn.akinoncloud.com/products/2024/09/20/109202/29de734f-c43e-483a-87d6-e86f4f1210b7_size3840_cropCenter.jpg"
            },
            {
                "id" : 3,
                "name" : "https://bf1af2.a-cdn.akinoncloud.com/products/2024/09/21/109183/f5b07e9f-e002-4a1c-9d16-14d5fa6fce01.jpg"
            }
        ],
        "colors" : [
            {
                "id" : 1,
                "code" : "rgba(11, 11, 11, 0.491)"
            },
            {
                "id" : 2,
                "code" : "rgba(255, 255, 255, 0.93)"
            },
            {
                "id" : 3,
                "code" : "rgba(84, 252, 235, 0.6)"
            },
            {
                "id" : 4,
                "code" : "rgba(255, 255, 255, 0.77)"
            }
        ],
        "desc"  : ""
    },
    {
        "id"   : 2,
        "name"   : "Google Pixel 7 Pro",
        "old_price" : 550,
        "new_price" : 540,
        "category" : "Phone",
        "brand"  : "Pixel",
        "images" : [
            {
                "id" : 1,
                "name" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSlX7IjNXQv2V3pEhHUZRqklOIJ3JxR7DZw&s"
            },
            {
                "id" : 2,
                "name" :  "https://bf1af2.a-cdn.akinoncloud.com/products/2024/09/20/109202/29de734f-c43e-483a-87d6-e86f4f1210b7_size3840_cropCenter.jpg"
            },
            {
                "id" : 3,
                "name" : "https://bf1af2.a-cdn.akinoncloud.com/products/2024/09/21/109183/f5b07e9f-e002-4a1c-9d16-14d5fa6fce01.jpg"
            }
        ],
        "colors" : [
            {
                "id" : 1,
                "code" : "rgba(11, 11, 11, 0.491)"
            },
            {
                "id" : 2,
                "code" : "rgba(255, 255, 255, 0.93)"
            },
            {
                "id" : 3,
                "code" : "rgba(84, 252, 235, 0.6)"
            },
            {
                "id" : 4,
                "code" : "rgba(255, 255, 255, 0.77)"
            }
        ],
        "desc"  : ""
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