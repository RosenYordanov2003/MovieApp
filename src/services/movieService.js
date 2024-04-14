import { findByAltText } from "@testing-library/react";

const bearerToken = process.env.REACT_APP_BEARER_TOKEN;

export async function loadPopularMediaList(pageNumber, category, criteria){
   const baseUrl = `https://api.themoviedb.org/3/${category}/${criteria}?language=en-US&`;
    if(!pageNumber || pageNumber === null){
        pageNumber = 1
    }
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${bearerToken}`
        }
      };
    const request = await fetch(`${baseUrl}page=${pageNumber}`, options);

    const response = await request.json();

    return response;
}
export async function getMovieVideos(movieId){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearerToken}`
    }
  };
  
  const request = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);

  const response = await request.json();

  return response;
}
export async function searchCollection(queryString, pageNumber){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearerToken}`
    }
  };
  
  const request = await fetch(`https://api.themoviedb.org/3/search/collection?query=${queryString}&include_adult=false&language=en-US&page=${pageNumber}`, options);

  const response = request.json();

  return response;
}
export async function getDetails(category, id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearerToken}`
    }
  };
  
  const request = await fetch(`https://api.themoviedb.org/3/${category}/${id}?language=en-US`, options);

  const response = await request.json();
  
  return response;
}
export async function getCasts(category, id){
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${bearerToken}`
      }
  };
  
    const request = await fetch(`https://api.themoviedb.org/3/${category}/${id}/credits?language=en-US`, options);

    const response = await request.json();

    return response;
}
export async function getVideos(category, id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearerToken}`
    }
  };
  
  const request = await fetch(`https://api.themoviedb.org/3/${category}/${id}/videos?language=en-US`, options);

  const response = await request.json();

  return response;
}
export async function getSimilar(category, id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearerToken}`
    }
  };
  
  const request = await fetch(`https://api.themoviedb.org/3/${category}/${id}/similar?language=en-US&page=1`, options);
  
  const response = await request.json();
  
  return response;
}

  