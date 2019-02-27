import React, { Component } from 'react';
import Pic from './Pic'

export default class PicsList extends Component {
    

    
     mapThruPics = () => {
          return this.props.pics.map(pic => {
              return <Pic pic={pic}/>
          })
      }
    
    
    render() {
       return (
          <><p>Homepage! Logged in</p> 
          <ul>
              {this.mapThruPics()}
          </ul></>

       )}
}