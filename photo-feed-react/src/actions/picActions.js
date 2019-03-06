import * as types from './actionTypes'
import {API_URL} from './apiUrl'


export function fetchPics () { //changing this off of export default to reg expert is what solved that final test (async actions). In App.js I then had to add the curly braces around the import fetchCats line
    return (dispatch) => { 
        dispatch({type: types.LOADING_PICS})
        return fetch(`${API_URL}/pics`, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .catch(error => console.error(error))
            .then(resp => resp.json())
            .then(picData => {
                dispatch({type: types.FETCH_PICS, payload: picData})})
            .catch(error => console.log(error))
    }
}


export function fetchArtistPics (artistName) { 
    return (dispatch) => { 
        dispatch({type: types.LOADING_PICS})
        return fetch(`${API_URL}/${artistName}`)
            .catch(error => console.error(error))
            .then(resp => resp.json())
            .then(picData => {
                dispatch({type: types.FETCH_ARTIST_PICS, payload: picData})})
            .catch(error => console.log(error))
    }
}



export function savePic(pic) {
    return (dispatch) => {
        return fetch(`${API_URL}/add_pic_to_user`, {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json",
                'Authorization': `Bearer ${localStorage.token}`
              },
              body: JSON.stringify({
                  pic: pic})
        })
        .then(resp => resp.json())
        .then(jresp => {
            return dispatch({ //sending this off is intended to refresh the user's cache of pics now that we just added this one  
                type: types.AUTHENTICATION_SUCCESS,
                user: jresp,
                token: localStorage.token
            })
        })
        .catch(error => console.log(error))
    }
}



export function unSavePic(pic) {
    return (dispatch) => {
        return fetch(`${API_URL}/remove_pic_from_user`, {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json",
                'Authorization': `Bearer ${localStorage.token}`
              },
              body: JSON.stringify({
                  pic: pic})
        })
        .then(resp => resp.json())
        .then(jresp => {
            return dispatch({ //sending this off is intended to refresh the user's cache of pics now that we just added this one  
                type: types.AUTHENTICATION_SUCCESS,
                user: jresp,
                token: localStorage.token
            })
        })
        .catch(error => console.log(error))
    }
}