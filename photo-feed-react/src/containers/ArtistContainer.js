import React, { Component } from 'react';
import PicsList from '../components/Pics/PicsList'
import {connect} from 'react-redux'
import {fetchArtistPics} from '../actions/picActions'

class ArtistContainer extends Component {
    
    componentDidMount() {
        const artistId = window.location.href.split('/')[4]
        this.props.fetchArtistPics(artistId) 
    }

    // callDebug = () => {
    //     debugger
    // }
    
    render() {
        if (!this.props.artistPics) {
            const artistId = window.location.href.split('/')[4]
            this.props.fetchArtistPics(artistId)
            return (
                <p> Loading...</p>
            ) 
        }
        else if (this.props.loading){
            return (
                <p> Loading...</p>
            )
        } else {
            return(
                <>
                <PicsList pics={this.props.artistPics} />
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        artistPics: state.picsReducer.artistPics,
        loading: state.picsReducer.loading,
        user: state.authReducer.currentUser
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchArtistPics: (artistId) => dispatch(fetchArtistPics(artistId))  
})
  

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer)