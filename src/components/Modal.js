import React from 'react'
import * as CONSTANTS from '../config/constants';
import { connect } from 'react-redux';
import images from '../config/images';
import setCurrentMovie from '../actionCreators/setCurrentMovie';

const { closeIcon, borderStarIcon, filledStarIcon, imdbIcon } = images;

function Modal({ handleToggleModal, currentMovie, handleCurrentMovie }) {

   const setCurrentModal = () => {
      handleToggleModal();
      handleCurrentMovie({})
   }

   const formatGenres = (genres) => {
      if(genres && genres.length){
         return genres.map(function(elem){
               return elem.name;
         }).join(", ");
      }
 
   }

   return (
      <div className="modal">
         <div className="modal-content">
            <div className="modal-header">
               <button onClick={setCurrentModal}>
                  <img alt="close" className="close-icon" src={closeIcon} />
               </button>
            </div>
            <div className="modal-body">
               <div className="modal-body__image-container">
                  <img 
                     alt={currentMovie.original_title} 
                     src={CONSTANTS.IMAGE_BASE_PATH + currentMovie.poster_path } 
                  />
               </div>
               <div className="modal-body__description-container">
                  <div className="description-title-container">
                     <h4>{currentMovie.title}</h4>
                     {currentMovie.imdb_id && 
                        <a target="_blank" 
                           rel="noopener noreferrer" 
                           href={`https://www.imdb.com/title/${currentMovie.imdb_id}`}>
                           <img alt="imdb" src={imdbIcon} />
                        </a>
                     }
                  </div>
                  <p className="description-tagline">{currentMovie.tagline}</p>
                  <span>Release Date: 
                     <span className="description-main-text"> {currentMovie.release_date}</span>
                  </span>
                  <div>
                     <p>{currentMovie.overview}</p>
                  </div>
                  <p>
                     <span>Genres: </span>
                     <span className="description-main-text">
                        {formatGenres(currentMovie.genres)}
                     </span>
                  </p>
                  <p>
                     <span>Status: </span>
                     <span className="description-main-text">{currentMovie.status}</span>
                  </p>
                  <p>
                     <span>Total votes:</span>
                     <span className="description-main-text"> {currentMovie.vote_count} votes.</span>
                  </p>
                  <div className="movie-popular__rating-container">
                     {CONSTANTS.RATING_LIST.map((rate,key) => 
                        <div key={key}>
                        {
                           Math.ceil(currentMovie.vote_average) < rate ? 
                              <img alt="star" src={borderStarIcon} /> : 
                              <img alt="star" src={filledStarIcon} /> 
                           }
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = ({ currentMovie }) => ({
   currentMovie
});

 const mapDispatchToProps = dispatch =>  ({
   handleCurrentMovie(currentMovieId) {
      dispatch(setCurrentMovie(currentMovieId))
   },
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Modal);