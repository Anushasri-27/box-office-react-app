/* eslint-disable no-undef */

const BASE_URL = "https://api.tvmaze.com";


const apiGet = async (querryString) => {
   
   // eslint-disable-next-line no-unreachable
   const response =await fetch( `${BASE_URL}${querryString}` );

   const body = await response.json();

   return body; 

};

export const searchForShow = (query) => apiGet(`/search/shows?q=${query}`);

export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);

export const getShowById = (ShowId) => apiGet(`/shows/${ShowId}?embed[]=seasons&embed[]=cast`);

export  const getShowByIds = async ShowIds =>{
   const promises = ShowIds.map(ShowId => apiGet(`/shows/${ShowId}`));
  
   const result = await Promise.all(promises);
     console.log(result);
   return result;
}
