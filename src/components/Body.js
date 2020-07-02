import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import * as CONSTANTS from '../config/constants';
import images from '../config/images';
import getMovies from '../actionCreators/getMovies' ;

import MoviesList from './MoviesList';

const { starIcon, filledStarIcon, popularIcon } = images;

function Body({ getPopularMovies, moviesList, isLoading}) {
   const [currentRate, setCurrentRate] = useState(0);
   const [newMoviesList, setNewMoviesList] = useState([]);

   useEffect(() => {
      getPopularMovies();
   }, [getPopularMovies])

   useEffect(() => {
      setNewMoviesList(moviesList)
      setCurrentRate(0)
   }, [moviesList]);

   const setRating =  starRate => {
      setCurrentRate(starRate);
      filterMoviesByRate(starRate);
   }

   const filterMoviesByRate = starRate => {
      if(starRate === currentRate){
         setNewMoviesList(moviesList);
         setCurrentRate(0);
         return;
      }

      let filteredMoviesList = moviesList.filter(movie => Math.ceil(movie.vote_average) <= starRate);
      setNewMoviesList(filteredMoviesList)
   }

   return (
      <div className="movie-container">
      <div className="movie-popular__title-container">
         <div className="movie-popular__title">
            <img alt="popular" src={popularIcon} />
            <span>Popular Movies</span>
         </div>
         <div className="movie-popular__rating-container">
            {CONSTANTS.RATING_LIST.map((rate,key) => 
               <button onClick={() => setRating(rate)} key={key}>
                 {
                  currentRate < rate ? 
                     <img alt="star" src={starIcon} /> : 
                     <img alt="star" src={filledStarIcon} /> 
                  }
               </button>
            )}
         </div>
      </div>
      {!isLoading ? <MoviesList moviesList={newMoviesList} /> : <div className="loader" /> }
      </div>
   )
}

const mapStateToProps = ({ moviesList, isLoading }) => ({
   moviesList,
   isLoading
 });

const mapDispatchToProps = dispatch =>  ({
   getPopularMovies() {
      dispatch(getMovies())
   },
 });

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Body);