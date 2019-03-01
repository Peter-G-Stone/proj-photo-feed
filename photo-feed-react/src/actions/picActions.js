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