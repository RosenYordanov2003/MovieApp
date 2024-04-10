const bearerToken = process.env.REACT_APP_BEARER_TOKEN;
const baseUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&`;

export async function loadHeroSectionMovie(pageNumber){
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