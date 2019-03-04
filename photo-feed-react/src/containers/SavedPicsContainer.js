import React, { Component } from 'react';
import PicsList from '../components/Pics/PicsList'
import {connect} from 'react-redux'

class SavedPicsContainer extends Component {
    
    filterForUserPics = () => {
        const userPicIds = this.props.user.pics.map(picObj => picObj.id)
        const UserPics = this.props.pics.filter(pic => userPicIds.includes(pic.id))
        return UserPics
    }
    
    
    render() {
        return(
            <> 
            <PicsList pics={this.filterForUserPics()} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {pics: state.picsReducer.pics,
    user: state.authReducer.currentUser}
}

// const mapDispatchToProps = (dispatch) => ({

//   })
  

export default connect(mapStateToProps)(SavedPicsContainer)