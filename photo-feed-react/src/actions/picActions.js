export function fetchPics () { //changing this off of export default to reg expert is what solved that final test (async actions). In App.js I then had to add the curly braces around the import fetchCats line
    return (dispatch) => { 
        dispatch({type: 'LOADING_PICS'})
        return fetch('http://localhost:3001/api/pics')
            .then(resp => resp.json())
            .then(picData => {
                dispatch({type: "FETCH_PICS", payload: picData})})
    }
}