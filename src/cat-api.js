import Notiflix from 'notiflix';
const textLoader = document.querySelector('.loader');
const error = document.querySelector('.error');
export function fetchBreeds() {
const params = new URLSearchParams({
    api_key: "live_k56NhF6Fgxd3eB7Cdejwig9QtWhpdwAQAB2B91u4etEu1xiUdYyK77JNLUEqVxxB",
  });
    return fetch(`https://api.thecatapi.com/v1/breeds?${params}`)
    .then((resp) => {
        if (!resp.ok) {
            textLoader.style.display = 'none'
            throw new Error(Notiflix.Notify.failure(`${error.textContent}`));
            
        }
        return resp.json();
    })
};

export function fetchCatByBreed(breedId) {
    
  const params = new URLSearchParams({
    api_key: "live_k56NhF6Fgxd3eB7Cdejwig9QtWhpdwAQAB2B91u4etEu1xiUdYyK77JNLUEqVxxB",
    breed_ids: breedId
  });
    
   return fetch(`https://api.thecatapi.com/v1/images/search?${params}`)
    
    .then((resp) => {
        if (!resp.ok) {
            textLoader.style.display = 'none'
            throw new Error(Notiflix.Notify.failure(`${error.textContent}`));
        }        
        return resp.json();
    })
};

