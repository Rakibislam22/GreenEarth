// fetching the  category
const categry = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories))

}

// featch all data
const allData = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res =>res.json())
    .then(data => displayAllData(data.plants))
}

// display all data
const displayAllData = (plants) => {
 
    const allPlants = document.getElementById('allPlants');
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
        allPlants.appendChild(newCata);
    }
}


// display the category
const displayCategory = (categories) => {
   
    const categoryContainer = document.getElementById('category-container');
    for(ca of categories){

        const newCata = document.createElement("div");
        newCata.innerHTML = `
          
            <p class="hover:bg-[#15803D] hover:text-white p-2 w-full  rounded-md">${ca.category_name}</p>
            
        `
        categoryContainer.appendChild(newCata);
    }
    
}

categry();
allData();