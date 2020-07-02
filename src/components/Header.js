import React, { Component } from 'react'
import Banner from './Banner'
import TopBar from './TopBar'
import SearchBar from './SearchBar'

export default class Header extends Component {
   render() {
      return (
         <header className="movie-header">
            <Banner />
            <TopBar />
            <SearchBar />
         </header>
      )
   }
}
