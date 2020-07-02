import * as CONSTANTS from '../config/constants'

export default function getMovies(keyword) {
   return async function getMoviesThunk(dispatch, getState) {
      try {
         dispatch({ type: "SET_LOADING", payload: true });
         let results = [];
         if(keyword && keyword.length){
            const searchUrl = `${CONSTANTS.SEARCH_URL}/?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}`;
            const searchResponse = await fetch(searchUrl);
            const responseJSON = await searchResponse.json();
            results = responseJSON.results
         } else {
            const sortType = "popularity.desc";
            const discoverUrl = `${CONSTANTS.DISCOVER_URL}/?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${sortType}`;
            const discoverResponse = await fetch(discoverUrl);
            const responseJSON = await discoverResponse.json();
            results = responseJSON.results
         }
         dispatch({ type: "GET_MOVIES", payload: results });
      } catch (error) {
         console.log('error', error)
      } finally {
         dispatch({ type: "SET_LOADING", payload: false });
      }
   }
}