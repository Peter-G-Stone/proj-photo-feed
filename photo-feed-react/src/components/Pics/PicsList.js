import React, { Component } from 'react';
import Pic from './Pic'

export default class PicsList extends Component {
    

    
     mapThruPics = () => {
        if (this.props.pics.length === 0){
            return <p>You haven't saved any pictures yet!</p>
        } else {
            return this.props.pics.map(pic => {
                  return <Pic key={pic.id} pic={pic}/>
            })
        }
      }
    
    
    render() {
       return (
          <><h3>PicList!</h3> 
              {this.mapThruPics()}
          </>

       )}
}