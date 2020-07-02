import * as CONSTANTS from '../config/constants';

export default function setCurrentMovie(movieId) {
   return async function setCurrentMovieThunk(dispatch, getState) {
      if(movieId){
         try {
            const movieUrl = `${CONSTANTS.MOVIE_URL}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
            const movieResponse = await fetch(movieUrl);
            const responseJSON = await movieResponse.json();
            dispatch({ type: "SET_MOVIE", payload: responseJSON });
         } catch (error) {
            console.log('error', error)
         }
      } else {
         dispatch({ type: "SET_MOVIE", payload: null });
      }
   }
}