import React, { useState } from 'react'
import Poster from './Poster'
import * as CONSTANTS from '../config/constants'
import Portal from './Portal';
import Modal from './Modal';

export default function MoviesList({ moviesList }) {
   const [toggleModal, setToggleModal] = useState(false);
   const setImageUrl = (poster_path) => {
      let finalUrl = poster_path && `${CONSTANTS.IMAGE_BASE_PATH}${poster_path}`;
      return finalUrl;
   }

   const handleToggleModal = () => {
     document.body.style.overflow = !toggleModal ? "hidden" : "initial"
      setToggleModal(!toggleModal);
   }

   return (
      <>
         {
            moviesList && moviesList.length ? (
               <>
                  <div className="movie-popular__grid">
                     { moviesList.map((movie, key) => 
                        <Poster 
                           key={key}
                           original_title={movie.original_title} 
                           poster_path={setImageUrl(movie.poster_path)} 
                           currentMovieId={movie.id}
                           handleToggleModal={handleToggleModal}
                        />
                     )}
                  </div>
                  {toggleModal && 
                     <Portal>
                        <Modal 
                           handleToggleModal={handleToggleModal} 
                        />
                     </Portal>
                  }
               </>
            ) : 
            <div className="movie-popular__not-found">
               <h6 className="not-found__text">No movies to display.</h6>
            </div>
         }
      </>
   )
}
