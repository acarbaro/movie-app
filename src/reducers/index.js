import { combineReducers } from "redux";
import movies from './movies';
import loading from './loading'
import current_movie from './current_movie'

export default combineReducers({
   moviesList: movies,
   isLoading: loading,
   currentMovie: current_movie
});