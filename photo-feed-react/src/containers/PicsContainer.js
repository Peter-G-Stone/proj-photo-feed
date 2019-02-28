import React, { Component } from 'react';
import PicsList from '../components/Pics/PicsList'
import {connect} from 'react-redux'
import {fetchPics} from '../actions/picActions'

class PicsContainer extends Component {
    
    componentDidMount() {
        if (localStorage.getItem('jwt')) {
            if (this.props.pics.length === 0){
                this.props.fetchPics()
            }
        } else {
            // redirect somewhere if they're not logged in
        }
    }

    
    
    render() {
        return(
            <> 
            <PicsList pics={this.props.pics} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {pics: state.picsReducer.pics}
}

const mapDispatchToProps = (dispatch) => ({
    fetchPics: () => dispatch(fetchPics())
  })
  

export default connect(mapStateToProps, mapDispatchToProps)(PicsContainer)