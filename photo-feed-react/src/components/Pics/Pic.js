import React, {Component} from 'react';
import {connect} from 'react-redux'
import { savePic, unSavePic } from '../../actions/picActions'



class Pic extends Component {
    // constructor(props) {
    //     super(props);
    // }

    handleSavePic = (e) => {
        e.preventDefault()
        this.props.savePic(this.props.pic)
        
    }

    handleUnSavePic = (e) => {
        e.preventDefault()
        this.props.unSavePic(this.props.pic)
    }

    renderSaveToggle = () => {
        if (this.props.currentUser.username){
            let userHasSavedPic = this.props.currentUser.pics.map(picIdObj => picIdObj.id).includes(this.props.pic.id)
            if (userHasSavedPic) {
                return <p><a href="/" onClick={(e) => this.handleUnSavePic(e)}>UnSave</a></p>
            } else {
                return <p><a href="/" onClick={(e) => this.handleSavePic(e)}>Save</a></p>
            }
        }
    }

    
    render () {
        const pic = this.props.pic
        
        return (
            <>
                <p><img alt="picInList" src={pic.url}/></p>
                <p>By: {pic.artist.name}</p>
                
                {this.renderSaveToggle()}
                <p> - </p>
            </>
        )
    }
} 

const mapStateToProps = (state) => {
    return {currentUser: state.authReducer.currentUser}
}

const mapDispatchToProps = (dispatch) => ({
    savePic: (pic) => dispatch(savePic(pic)),
    unSavePic: (pic) => dispatch(unSavePic(pic))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Pic)