const categories = [
    {
        "id" : 1,
        "name" : "Phone",
        "stock" : 50,
        "description" : "Phone new stock"
    },
    {
       "id" : 2,
       "name" : "Computer",
       "stock" : 50,
       "description" : "Computer new stock" 
    },
    {
        "id" : 3,
        "name" : "Watch",
        "stock" : 20,
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




var categoryShow = document.querySelector(".categories-block");


categories.map((item,index) => {
    
    if(item.types){
        let dropdownMenu = ``;

        dropdownMenu += `
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               ${item.name}
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Men</a></li>
                <li><a class="dropdown-item" href="#">Woment</a></li>
            </ul>
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


//inner slides to html
var showAllSlide = document.querySelector(".all-slides");

slides.map((item,index) => {
    let slideHtml = ``;
    slideHtml += `
        <div class="carousel-item ${index == 0 ? 'active' : ''}" data-bs-interval="5000">
            <img src="${item.image}" class="d-block w-100" alt="...">
        </div>
    `;

    showAllSlide.innerHTML += slideHtml;
})
