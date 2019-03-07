import React, {Component} from 'react';
import {connect} from 'react-redux'
import { savePic, unSavePic, fetchArtistPics } from '../../actions/picActions'
import { Link, withRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button'




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
    
    handleArtistLinkClick = (e) => {
        // this.props.fetchArtistPics(this.props.pic.artist_id)

    }

    renderSaveToggle = () => {
        if (this.props.currentUser.username){
            let userHasSavedPic = this.props.currentUser.pics.map(picIdObj => picIdObj.id).includes(this.props.pic.id)
            if (userHasSavedPic) {
                return <p><Button variant="primary" onClick={(e) => this.handleUnSavePic(e)}>UnSave</Button> from <Link to="/your_collection">Your Collection</Link></p>
            } else {
                return <p><Button variant="primary" onClick={(e) => this.handleSavePic(e)}>Save</Button></p>
            }
        }
    }

    
    render () {
        const pic = this.props.pic
        const artistLink = '/artists/' + pic.artist.id
        
        return (
            <>
                <p><img alt="picInList" src={pic.url}/></p>
                <Link to={artistLink}>{pic.artist.name}</Link>
                
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
    unSavePic: (pic) => dispatch(unSavePic(pic)),
    fetchArtistPics: (artistId) => dispatch(fetchArtistPics(artistId))
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pic))