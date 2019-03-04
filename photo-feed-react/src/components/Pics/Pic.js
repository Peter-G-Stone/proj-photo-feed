import React, {Component} from 'react';
import {connect} from 'react-redux'



class Pic extends Component {
    constructor(props) {
        super(props);
    }

    savePic = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/api/add_pic_to_user', {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
              },
              body: JSON.stringify({request: {
                  user: this.props.currentUser, 
                  pic: this.props.pic}})
        })
        .then(resp => resp.json())
        .then(jresp => {
            debugger
            return jresp
        })
    }

    
    render () {
        const pic = this.props.pic
        return (
            <>
                <p><img alt="picInList" src={pic.url}/></p>
                <p>By: {pic.artist.name} <a href="#" onClick={(e) => this.savePic(e)}>Save</a></p>
                <p> - </p>
            </>
        )
    }
} 

const mapStateToProps = (state) => {
    return {currentUser: state.authReducer.currentUser}
}

export default connect(mapStateToProps)(Pic)