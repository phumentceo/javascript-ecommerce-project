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
