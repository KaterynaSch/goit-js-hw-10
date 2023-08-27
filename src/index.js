import { fetchBreeds,  fetchCatByBreed} from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const textLoader = document.querySelector('.loader');
const textError = document.querySelector('.error');
const catInfo = document.querySelector(".cat-info");

textError.style.display = 'none';

window.addEventListener('DOMContentLoaded', () => {
    breedSelect.insertAdjacentHTML("afterbegin", `<option>Select_breed</option>`);
    breedSelect.style.display = 'none';
    setTimeout(() => {
        fetchBreeds()    
        .then(data => {
            
            breedSelect.style.display = 'block'
            textLoader.style.display = 'none'
            breedSelect.insertAdjacentHTML("beforeend", createMarkup(data))
        
        })
        .catch(error => { console.log(error)            
            textLoader.style.display = 'none'            
        });   
    }, 400)
   
});

function createMarkup(arr){
    return arr.map(({id,name}) => `<option value="${id}">${name}</option>`).join('')
};

breedSelect.addEventListener('change', handlerChange);

function handlerChange() {   
    
    const selectedBreedId = breedSelect.value;                   
    textLoader.style.display = 'block';
    textError.style.display = 'none';
    catInfo.style.display = 'none';
    setTimeout(() => {
        fetchCatByBreed(selectedBreedId)
        .then((data => { 
                            
            if (data[0] === undefined ) {                
                
                textError.style.display = 'block';
                textError.style.color = 'tomato';
                textLoader.style.display = 'none';
                
            } else {
                textLoader.style.display = 'none';
                catInfo.style.display = 'block';
                console.dir(data[0].breeds[0]);
                const { url, width, height, breeds } = data[0]
                catInfo.innerHTML = `<div > <img class="cat" src="${url}" alt="${data[0].breeds[0].name}" width="${width * 0.3}" height="${height * 0.3}"/>
                <h2>${breeds[0].name}</h2>
                <p>${breeds[0].description}</p>
                <h3>Temperament:${breeds[0].temperament}</h3></div>`
            }
            
        }))
    
        .catch((error) => {
            console.log(error)
            textLoader.style.display = 'none'
            
        })

        }, 600)
    
    
};

