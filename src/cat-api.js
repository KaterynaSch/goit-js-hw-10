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

// import Notiflix from 'notiflix';
// import axios from 'axios';
// axios.defaults.headers.common["x-api-key"] = "live_k56NhF6Fgxd3eB7Cdejwig9QtWhpdwAQAB2B91u4etEu1xiUdYyK77JNLUEqVxxB";
// const BASE_URL = 'https://api.thecatapi.com/v1';
// const textError = document.querySelector('.error');

// export function fetchBreeds() {
//     const END_POINT = '/breeds'; 
    
//     return axios
//         .get(`${BASE_URL}${END_POINT}`)
//         .then(response => response.data)      
//         .catch(error => { throw new Error(Notiflix.Notify.failure(`${textError.textContent}`)) })
// };

// export function fetchCatByBreed(breedId) {
//     const END_POINT = '/images/search';
    
//     const params = new URLSearchParams({   
//         breed_ids: breedId,
//     });
//     return axios
//         .get(`${BASE_URL}${END_POINT}?${params}`)
//         .then(response => response.data)
//         .catch(error => { throw new Error(Notiflix.Notify.failure(`${textError.textContent}`)) })
    
// }
