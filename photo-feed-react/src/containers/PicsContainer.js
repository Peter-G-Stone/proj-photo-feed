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

    renderSubtitle = () => {    
        if (this.props.containerFor === "your_collection"){
            return <h4 className="my-4">Your Collection</h4>
        } 
    }
    
    render() {
        let filteredPics
        if (this.props.containerFor === "pic_list"){
            filteredPics = this.props.pics
        } 
        else if (this.props.containerFor === "your_collection"){
            filteredPics = this.filterForUserPics()
        } 
        

        if (this.props.loading){
            return (
                <p> Loading...</p>
            )
        } else {
            return(
                <>

                {this.renderSubtitle()}
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