import React, { Component } from 'react';
import PicsList from '../components/Pics/PicsList'
import {connect} from 'react-redux'
import {fetchPics} from '../actions/picActions'

class PicsContainer extends Component {
    
    componentDidMount() {
       
        if (this.props.pics.length === 0){
                this.props.fetchPics()
        }
    }

    filterForUserPics = () => {
        const userPicIds = this.props.user.pics.map(picObj => picObj.id)
        const UserPics = this.props.pics.filter(pic => userPicIds.includes(pic.id))
        return UserPics
    }

    
    render() {
        let filteredPics
        if (this.props.containerFor === "pic_list"){
            filteredPics = this.props.pics
        } 
        else if (this.props.containerFor === "saved_pics"){
            filteredPics = this.filterForUserPics()
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
        loading: state.picsReducer.loading,
        user: state.authReducer.currentUser
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPics: () => dispatch(fetchPics())  
})
  

export default connect(mapStateToProps, mapDispatchToProps)(PicsContainer)