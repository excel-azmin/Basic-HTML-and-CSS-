const fetchCategories = async () => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return loadCategories(data.categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}  

const fetchPets = async() => {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }   
        const data = await response.json();
        return loadPets(data.pets);
    } catch (error) {
        console.error('Error fetching pets:', error);
        return [];
    }
}

const loadCategories = async (categories) => { 
    
    const categoryContainer = document.getElementById('category-container');
    const categoryHTML = document.createElement('div');
    categoryHTML.classList = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'
    
    categories.forEach(item => {
        categoryHTML.innerHTML += `
            <div class="flex gap-1 border-1 border-gray-200 rounded-lg p-5 y-10 gap-5 justify-center items-center">
                <img src="${item.category_icon}" alt="">
                <h1>${item.category}</h1>
            </div>
        `
    });
     categoryContainer.append(categoryHTML);
}




const loadPets = (pets) => {
    console.log(pets);
    const petContainer = document.getElementById('pet-container');
    petContainer.classList = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5';
    const petHTML = document.createElement('div');
    petHTML.classList = 'lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5';
    pets.forEach(item => {
        petHTML.innerHTML += `
        
            <div class="flex flex-col items-start p-5 border-1 border-gray-200 rounded-lg gap-2">
                    <div>
                        <img src="${item.image}" alt="" class="mx-auto object-cover rounded-lg">
                    </div>
                    <h1 class="text-2xl font-bold">${item.pet_name}</h1>
                    <div class="flex flex-col item-start text-left text-gray-700 gap-1  w-full border-b-1 border-gray-200 pb-2">
                        <p><i class="fa-solid fa-house-chimney-window"></i> Breed: ${item.breed} </p>
                        <p><i class="fa-solid fa-calendar"> </i> Birth: ${item.date_of_birth}</p>
                        <p><i class="fa-solid fa-venus"></i> Gender: ${item.gender}</p>
                        <p><i class="fa-solid fa-dollar-sign"></i> Price : $${item.price}</p>
                    </div>
                    <hr >
                    <div class="flex justify-between items-center gap-2">
                        <button class="btn bg-white text-gray-700 font-bold py-5"><i class="fa-solid fa-thumbs-up"></i></button>
                        <button class="btn bg-white text-[#0E7A81] font-bold py-5">Adopt</button>
                        <button class="btn bg-white text-[#0E7A81] font-bold py-5">Details</button>
                    </div>
            </div>
        `;
    },
);


    
    petContainer.append(petHTML);
    const selectedPet = document.createElement('div');
    selectedPet.innerHTML = `
    <div class="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 my-10 gap-2 wrap">
            <div class="w-full h-40">
                <img src="https://www.animalcarectr.com/blog/images/fluffy_grey_cat.jpg" alt="" class="w-full h-full  object-cover rounded-lg">
            </div>
            <div class="w-full h-40">
                <img src="https://www.animalcarectr.com/blog/images/fluffy_grey_cat.jpg" alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div class="w-full h-40">
                <img src="https://www.animalcarectr.com/blog/images/fluffy_grey_cat.jpg" alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div class="w-full h-40">
                <img src="https://www.animalcarectr.com/blog/images/fluffy_grey_cat.jpg" alt="" class="w-full h-full object-cover rounded-lg">
            </div>
            <div class="w-full h-40">
                <img src="https://www.animalcarectr.com/blog/images/fluffy_grey_cat.jpg" alt="" class="w-full h-full object-cover rounded-lg">
            </div>
        </div>`;
    petContainer.append(selectedPet);
}


    
fetchCategories()
fetchPets()
