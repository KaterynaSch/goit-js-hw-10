import Notiflix from 'notiflix';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_k56NhF6Fgxd3eB7Cdejwig9QtWhpdwAQAB2B91u4etEu1xiUdYyK77JNLUEqVxxB';

export function fetchBreeds() {

    const END_POINT = '/breeds';    
    return fetch(`${BASE_URL}${END_POINT}?${API_KEY}`)
    .then((resp) => {
        if (!resp.ok) {           
            throw new Error(Notiflix.Notify.failure(`${textError.textContent}`));            
        }
        return resp.json();
    })
};

export function fetchCatByBreed(breedId) {
    const END_POINT = '/images/search';
  const params = new URLSearchParams({
    api_key: "live_k56NhF6Fgxd3eB7Cdejwig9QtWhpdwAQAB2B91u4etEu1xiUdYyK77JNLUEqVxxB",
    breed_ids: breedId
  });
    
   return fetch(`${BASE_URL}${END_POINT}?${params}`)
    .then((resp) => {
        if (!resp.ok) {            
            throw new Error(Notiflix.Notify.failure(`${textError.textContent}`));
        }
        return resp.json();
    })
};


