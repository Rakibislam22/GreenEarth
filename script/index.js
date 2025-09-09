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
        .then(res => res.json())
        .then(data => {

            allplants = data.plants;
            displayAllData(data.plants)
        })
}

// add to cart button
let cratElement = [];
const addToCart = (price, name) => {

    alert('Item added to cart');
    const cartContainer = document.getElementById("cart-container");
    const totalW = document.getElementById("total").innerText;

    cratElement.push(name);

    const newElement = document.createElement("div");

    newElement.innerHTML = ` 
        
                    <div class="flex justify-between items-center bg-[#F0FDF4] my-2 rounded-lg p-2">
                        <div>
                            <h1 class="font-bold">${name}</h1>
                            <p class="text-[#1F2937]"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${price}</span> x <span>1</span></p>
                        </div>
                        <div>
                            <button class=" cart-clear">❌</button>
                        </div>
                    </div>
                    
    
        `;

    cartContainer.appendChild(newElement);
    let total = parseInt(totalW) + parseInt(price);
    document.getElementById("total").innerText = total;


    // for mobile cart item count
    const cartContainerMobile = document.getElementById("cart-container-mobile");
    const totalWMobile = document.getElementById("total-mobile").innerText;

    const newElementMobile = document.createElement("div");

    newElementMobile.innerHTML = ` 
        
                    <div class="flex justify-between items-center bg-[#F0FDF4] my-2 rounded-lg p-2">
                        <div>
                            <h1 class="font-bold">${name}</h1>
                            <p class="text-[#1F2937]"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${price}</span> x <span>1</span></p>
                        </div>
                        <div>
                            <p class="cart-clear" >❌</p>
                        </div>
                    </div>
                    
    
        `;

    cartContainerMobile.appendChild(newElementMobile);
    let totalMobile = parseInt(totalWMobile) + parseInt(price);
    document.getElementById("total-mobile").innerText = totalMobile;

    // cart item count
    document.getElementById("cart-count").innerText = cratElement.length;
    
    //  remove element from cart
    const removeBtn = newElement.querySelector(".cart-clear");
    removeBtn.addEventListener("click", () => {
        newElement.remove();
        document.getElementById("total").innerText =
            (parseInt(document.getElementById("total").innerText) || 0) - price;
        
        newElementMobile.remove();
        document.getElementById("total-mobile").innerText =
            (parseInt(document.getElementById("total-mobile").innerText) || 0) - price;
        
        cratElement.pop();
        document.getElementById("cart-count").innerText = cratElement.length;
            
    });

    //  remove element from cart in mobile
    const removeBtnMobile = newElementMobile.querySelector(".cart-clear");
    removeBtnMobile.addEventListener("click", () => {
        newElementMobile.remove();
        document.getElementById("total-mobile").innerText =
            (parseInt(document.getElementById("total-mobile").innerText) || 0) - price;
        
        newElement.remove();
        document.getElementById("total").innerText =
            (parseInt(document.getElementById("total").innerText) || 0) - price; 
        
        cratElement.pop();
        document.getElementById("cart-count").innerText = cratElement.length;
    });
}




// activeness on the category and call display function by category
const activeCategory = (id) => {

    const categoryContainer = document.getElementById(`category-${id}`);
    const allac = document.querySelectorAll('.active');
    allac.forEach(a => a.classList.remove('active'))
    categoryContainer.classList.add('active');
    if (id === 0) {
        load(true);
        allData();
        return;
    }
    load(true);
    const c = fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => displayAllData(data.plants));


}



// loading function

const load = (show) => {
    if (show) {
        document.getElementById("load").classList.remove("hidden");
        document.getElementById("allPlants").classList.add("hidden");
    }
    else {
        document.getElementById("load").classList.add("hidden");
        document.getElementById("allPlants").classList.remove("hidden");
    }
}

// display all data
const displayAllData = (plants) => {
    load(true);
    const all_Plants = document.getElementById('allPlants');
    all_Plants.innerHTML = '';
    for (p of plants) {
        const newCata = document.createElement("div");
        newCata.innerHTML = `
            <div class="rounded-xl p-4 bg-white">

                        <img class="w-full h-64 object-cover object-center rounded-xl" src=${p.image} alt="">

                        <h1 class="forModals font-semibold py-3 inline-block">${p.name}</h1>
                        <p class="text-[#1F2937] text-[0.8rem] pb-2">${p.description}</p>
                        <div class="flex justify-between items-center">
                            <div class="text-[#15803D] rounded-3xl bg-[#DCFCE7] py-2 px-3">
                                <p>${p.category}</p>
                            </div>
                            <div class="font-bold">
                                <p class="pr-2"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${p.price}</p>
                            </div>
                        </div>
                        <button onclick="addToCart(${p.price},'${p.name}')" class="hover:bg-[#025f25] btn bg-[#15803D] rounded-3xl w-full my-3 text-white">Add to Cart</button>
                    </div>
        `
        all_Plants.appendChild(newCata);
        load(false);
    }

}



//Details in Modals
document.getElementById('allPlants').addEventListener('click', function (e) {
    if (e.target.classList.contains('forModals')) {
        const a = e.target.innerText;
        const modal = allplants.find(n => n.name.toLowerCase() === a.toLowerCase());

        const finalValue = document.getElementById('popUp');
        finalValue.innerHTML = ''; // clear old content
        const neValue = document.createElement("div");
        neValue.innerHTML = ` 
            <h1 class="text-xl font-bold py-3">${modal.name}</h1>
            <img class="w-full h-64 object-cover object-center rounded-xl" src="${modal.image}" alt="">
            <p class="py-2"><span class="font-bold">Category:</span> ${modal.category}</p>
            <p class="pr-2"><span class="font-bold">Price: </span><i class="fa-solid fa-bangladeshi-taka-sign"></i>${modal.price}</p>
            <p class="text-[#1F2937] text-[0.9rem] pt-3"><span class="font-bold">Description: </span>${modal.description}</p>
        `;
        finalValue.appendChild(neValue);
        my_modal_5.showModal();
    }
});



// display the category
const displayCategory = (categories) => {

    const categoryContainer = document.getElementById('category-container');
    for (ca of categories) {

        const newCata = document.createElement("div");
        newCata.innerHTML = `
          
            <button id="category-${ca.id}" onclick="activeCategory(${ca.id})" class=" max-sm:shadow hover:bg-[#69796c] hover:text-white p-2 w-full  rounded-md lg:text-left">${ca.category_name}</button>
            
        `
        categoryContainer.appendChild(newCata);
    }

}

categry();
allData();