import React, { useState } from 'react'
import { connect } from "react-redux";
import getMovies from '../actionCreators/getMovies';
import images from '../config/images';

const { searchIcon, closeIcon } = images;

function SearchBar({ handleSearchMovies }) {
   const [searchInput, setSearchInput] = useState("")

   const handleSearch = (e) => {  
      let keywordValue = e.target.value;
      setSearchInput(keywordValue)
      handleSearchMovies(keywordValue);
   }

   const cleanInput = () => {
      setSearchInput("");
      handleSearchMovies();
   }

   return (
      <div className="movie-searchbar">
         <div className="movie-search__input-container">
            <div className="movie-search__icon-container">
               <img alt="search_icon" src={searchIcon} />
            </div> 
            <input 
               placeholder="Search for a movie..." 
               value={searchInput}
               onChange={(e) => handleSearch(e)}
            />
            { searchInput && searchInput.length && 
               <button onClick={cleanInput} className="movie-search__close-icon__container">
                  <img alt="close_icon" src={closeIcon} />
               </button>
            } 
         </div>
      </div>
   )
}

const mapStateToProps = ({ moviesList }) => ({
   moviesList
 });

const mapDispatchToProps = dispatch =>  ({
   handleSearchMovies(keyword) {
      dispatch(getMovies(keyword))
   }
 });

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(SearchBar);