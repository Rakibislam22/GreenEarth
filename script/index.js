// fetching the  category
const categry = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/categories');
    const data = await res.json();
    displayCategory(data.categories);

}
let allplants;
// featch all data
const allData = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res =>res.json())
    .then(data => {
        
        allplants = data.plants;

        displayAllData(data.plants)
    })
}

// activeness on the category and call display function by category
const activeCategory = (id) => {
    const categoryContainer = document.getElementById(`category-${id}`);
    const allac = document.querySelectorAll('.active');
    allac.forEach(a => a.classList.remove('active'))
    categoryContainer.classList.add('active');
    if(id === 0){
        allData();
    }
    const innerTT = categoryContainer.innerText.toLowerCase();
    const c = allplants.filter(a => a.category.toLowerCase() === innerTT)
    displayAllData(c); 

}


// display all data
const displayAllData = (plants) => {
 
    const all_Plants = document.getElementById('allPlants');
    all_Plants.innerHTML = '';
    for(p of plants){
        const newCata = document.createElement("div");
        newCata.innerHTML = `
            <div class="rounded-xl p-4 bg-white">

                        <img class="w-full h-64 object-cover object-center rounded-xl" src=${p.image} alt="">

                        <h1 class="font-semibold py-3">${p.name}</h1>
                        <p class="text-[#1F2937] text-[0.8rem] pb-2">${p.description}</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#15803D] rounded-3xl bg-[#DCFCE7] py-2 px-3">
                                <p>${p.category}</p>
                            </div>
                            <div class="font-bold">
                                <p class="pr-2"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${p.price}</p>
                            </div>
                        </div>
                        <button class="btn bg-[#15803D] rounded-3xl w-full my-3 text-white">Add to Cart</button>
                    </div>
        `
        all_Plants.appendChild(newCata);
    }
}


// display the category
const displayCategory = (categories) => {
   
    const categoryContainer = document.getElementById('category-container');
    for(ca of categories){

        const newCata = document.createElement("div");
        newCata.innerHTML = `
          
            <button id="category-${ca.id}" onclick="activeCategory(${ca.id})" class="hover:bg-[#15803D] hover:text-white p-2 w-full  rounded-md lg:text-left">${ca.category_name}</button>
            
        `
        categoryContainer.appendChild(newCata);
    }
    
}

categry();
allData();