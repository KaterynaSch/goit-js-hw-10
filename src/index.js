import { fetchBreeds,  fetchCatByBreed} from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const textLoader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector(".cat-info");


window.addEventListener('DOMContentLoaded', () => {
    error.style.display = 'none'; 
    breedSelect.style.display = 'none';
    setTimeout(() => {
        fetchBreeds()    
        .then(data => {
        
                breedSelect.style.display = 'block'
                textLoader.style.display = 'none'
                breedSelect.insertAdjacentHTML("beforeend", createMarkup(data))
        
        })
        .catch(error => {
            Notiflix.Notify.failure(`${error.textContent}`)
            error.style.display = 'block'
            textLoader.style.display = 'none'
            
        });   
    }, 600)
   
});

function createMarkup(arr){
    return arr.map(({id,name}) => `<option value="${id}">${name}</option>`).join('')
};


breedSelect.addEventListener('change', handlerChange);

function handlerChange() {    
    const selectedBreedId = breedSelect.value;  
    textLoader.style.display = 'block'
    setTimeout(() => { 
        fetchCatByBreed(selectedBreedId)                
        .then(data => {   
        
            textLoader.style.display = 'none'
            const { url, breeds } = data[0]
            catInfo.innerHTML = `<div class="cat"> <img src="${data[0].url}" alt="${data[0].breeds[0].name}" class="" width="300"/>
            <h2 class="">${breeds[0].name}</h2>
            <p class="">${breeds[0].description}</p>
            <h3 class="">Temperament:${breeds[0].temperament}</h3></div>`
            
        })

        .catch(error => {
            Notiflix.Notify.failure(`${error.textContent}`)
            error.style.display = 'block',
            textLoader.style.display = 'none'         
        })    
    }, 600)
};