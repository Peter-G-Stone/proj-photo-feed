import React, { Component } from 'react';
import Pic from './Pic'

export default class PicsList extends Component {
    

    mapThruPics = () => {
        if (this.props.pics.length === 0){
            return <p>There aren't any pictures here!</p>
        } else {
            return this.props.pics.map(pic => {
                  return <Pic key={pic.id} pic={pic}/>
            })
        }
      }
    
    
    render() {
       return (
          <>
              {this.mapThruPics()}
          </>

       )}
}