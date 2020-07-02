import React from 'react'
import { connect } from 'react-redux';
import setCurrentMovie from '../actionCreators/setCurrentMovie';

function Poster({ 
   original_title, 
   poster_path, 
   handleToggleModal, 
   handleCurrentMovie,
   currentMovieId
}) {

   const setCurrentModal = () => {
      handleToggleModal();
      handleCurrentMovie(currentMovieId)
   }

   return (
      <>
      {poster_path && poster_path.length ? 
         <button onClick={setCurrentModal} className="movie-popular__item">
            <img 
               alt={original_title} 
               src={poster_path} 
            />
         </button> : null
      }
      </>
   )
}

const mapDispatchToProps = dispatch =>  ({
   handleCurrentMovie(currentMovieId) {
      dispatch(setCurrentMovie(currentMovieId))
   },
 });

 export default connect(
   null,
   mapDispatchToProps
 )(Poster);