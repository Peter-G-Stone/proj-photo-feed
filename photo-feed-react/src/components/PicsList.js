import React, { Component } from 'react';


export default class PicsList extends Component {
    

    
     mapThruPhotos = () => {
          return this.props.pics.map(pic => {
              return <p><img alt="picInList" src={pic.url}/></p>
          })
      }
    
    
    render() {
       return (
          <><p>Homepage! Logged in</p> 
          <ul>
              {this.mapThruPhotos()}
          </ul></>

       )}
}