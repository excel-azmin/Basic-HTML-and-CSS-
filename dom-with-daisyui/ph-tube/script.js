
// Fetch, Load and Show Categories

const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.error(err));
};

const loadVideos = (searchTerm = '') => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchTerm}`)
        .then(res => res.json())
        .then(data => {displayVideos(data.videos)})
        .catch(err => console.error(err));
}

const loadCategoryVideos = (id ) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            
            for (const btn of document.querySelectorAll('.btn-category')) {
                btn.classList.remove(`bg-[#FF1F3D]`);
                btn.classList.remove(`text-white`);
            }
            const activeBtn = document.getElementById(`btn-${id}`);
            console.log(activeBtn);
            activeBtn.classList.add(`bg-[#FF1F3D]`);
            activeBtn.classList.add(`text-white`);
            displayVideos(data.category)
        })
        .catch(err => console.error(err));
}

const loadVideoDetails = (videoId) => { 
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.video);
            const modalContent = document.getElementById('modal-content');
            modalContent.innerHTML = ` 
            <img src="${data.video.thumbnail}" alt="${data.video.title}" class="w-full h-64 object-cover rounded-lg mb-4">
            <h2 class="text-2xl font-bold mb-2">${data.video.title}</h2>
            <p class="text-gray-500 mb-4">${data.video.description}</p>
            <div class="flex items-center gap-4 mb-4">
                <img src="${data.video.authors[0].profile_picture}" alt="${data.video.authors[0].profile_name}" class="w-10 h-10 rounded-full">
                <div>
                    <h3 class="text-lg font-semibold">${data.video.authors[0].profile_name}</h3>
                    <p class="text-gray-500">${data.video.authors[0].verified ? 'Verified' : 'Not Verified'}</p>
                </div>
            </div>
            <p class="text-gray-500 mb-4">Views: ${data.video.others.views}</p>
            <p class="text-gray-500 mb-4">Posted on: ${data.video.others.posted_date ? secondsToHMS(data.video.others.posted_date) : 'N/A'}</p>
            <p class="text-gray-500 mb-4">Likes: ${data.video.others.likes}</p>
            <p class="text-gray-500 mb-4">Dislikes: ${data.video.others.dislikes}</p>
            <p class="text-gray-500 mb-4">Comments: ${data.video.others.comments}</p>
            <p class="text-gray-500 mb-4">Duration: ${data.video.others.duration ? secondsToHMS(data.video.others.duration) : 'N/A'}</p>
            <p class="text-gray-500 mb-4">Category: ${data.video.category ? data.video.category : 'N/A'}</p>
            <p class="text-gray-500 mb-4">Video ID: ${data.video.video_id}</p>

             <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn">Close</button>
                </form>
              </div>
            `;
            document.getElementById('videoDetailsModal').showModal();
        })
        .catch(err => console.error(err));

}

const displayCategories = (categories) => { 
    console.log(categories);
    const categoriesContainer = document.getElementById('categories');
    categories.forEach( (category) => {
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = 
            `<button id="btn-${category.category_id}" class="btn btn-category text-gray-500 font-bold py-5" onClick="loadCategoryVideos(${category.category_id})"> ${category.category} </button> `;
        
        
        categoriesContainer.append(buttonContainer);
    }); 
}

const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = ''; 
    if (videos.length === 0) {
        videosContainer.classList.remove('grid');
        videosContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center w-full h-full content-center text-center">
            <img src="./Icon.png" alt="No videos found" class="w-20 h-20 mx-auto my-10">
            <h2 class="text-3xl font-bold"> Opps!! Sorry, There is no content here. </h2>
        </div>`;

        return;
    }
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList = `card bg-base-100 w-96 `;
        videoCard.innerHTML = `
            <figure class="w-full h-64 relative">
                <img
                class="w-full h-full object-cover rounded-lg"
                loading="lazy"
                src="${video.thumbnail}"
                alt="${video.title}" />
                ${video.others.posted_date != '' ? `<span class="absolute right-2 bottom-2 bg-black  text-white px-5 py-1 text-sm rounded"> ${secondsToHMS(video.others.posted_date)}</span>` : ''}
            </figure>
            <div class="card-body pl-0">
                <div class="flex items-start w-full gap-4"> 
                    <div>
                        <img src="${video.authors[0].profile_picture}" alt="${video.authors[0].profile_name}" class="w-10 h-10 rounded-full inline-block mr-2">
                    </div>
                    <div>
                        <h2 class="text-sm font-bold text-black">${video.title}</h2>
                        <p class="text-m text-gray-400 flex flex-inline"> ${video.authors[0].profile_name} ${ video.authors[0].verified === true ? '<span class="w-5 h-2"> <img src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" >  </span> ' : ''} </p>
                        <p class="text-m text-gray-400"> ${video.others.views} views</p>
                    </div>
                    <div  class="w-8 h-8 border-1 border-red-400 rounded-full bg-[#FFFFFF] flex flex-inline item-center"> 
                        <button class="w-full h-full pointer" onClick="loadVideoDetails('${video.video_id}')"> <i class="fa-solid fa-circle-info text-md"></i>  </button> 
                    </div>
                </div>

                
            </div>`;
         
        videosContainer.append(videoCard);            
    });
}

loadCategories();
loadVideos();

document.getElementById('searh-input').addEventListener('keyup', (e) => {       
    const searchTerm = e.target.value.toLowerCase();
    loadVideos(searchTerm)
});


function secondsToHMS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remaining = seconds % 3600;
  const minutes = Math.floor(remaining / 60);

  return `${hours} hours, ${minutes} minutes`;
}