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