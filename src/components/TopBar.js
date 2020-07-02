import React, { Component } from 'react'

export default class TopBar extends Component {
   render() {
      return (
         <div className="banner-background__topbar">
            <span className="text-logo">{process.env.REACT_APP_NAME}</span>
         </div>
      )
   }
}
