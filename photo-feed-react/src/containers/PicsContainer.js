import React, { Component } from 'react';
import PicsList from '../components/Pics/PicsList'
import {connect} from 'react-redux'
import {fetchPics} from '../actions/picActions'

class PicsContainer extends Component {
    
    componentDidMount() {
        if (this.props.containerFor === "artist_page"){
            const artist_name = window.location.href.split('/')[3]
        }
        else if (this.props.pics.length === 0){
                this.props.fetchPics()
        } else {
            console.log('you are in the else in picsContainer')
        }
    }

    filterForUserPics = () => {
        const userPicIds = this.props.user.pics.map(picObj => picObj.id)
        const UserPics = this.props.pics.filter(pic => userPicIds.includes(pic.id))
        return UserPics
    }

    
    render() {
        debugger

        let filteredPics
        if (this.props.containerFor === "pic_list"){
            filteredPics = this.props.pics
        } 
        else if (this.props.containerFor === "saved_pics"){
            filteredPics = this.filterForUserPics()
        } 
        else if (this.props.containerFor === "artist_page"){
            filteredPics = this.props.artistPics
        } 

        if (this.props.loading){
            return (
                <p> Loading...</p>
            )
        } else {
            return(
                <>
                {/* insert a function to render a subtitle - user page or artist page */}
                <PicsList pics={filteredPics} />
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        pics: state.picsReducer.pics,
        artistPics: state.picsReducer.artistPics,
        loading: state.picsReducer.loading,
        user: state.authReducer.currentUser
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPics: () => dispatch(fetchPics())  
})
  

export default connect(mapStateToProps, mapDispatchToProps)(PicsContainer)