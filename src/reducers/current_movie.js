export default function currentMovieReducer(state = {}, action) {
   switch (action.type) {
     case "SET_MOVIE":
       return action.payload;
     default:
       return state;
   }
 }