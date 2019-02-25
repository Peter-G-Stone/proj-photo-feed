export default function picsReducer (state = {
    pictures: [],
    loading: false
}, action) {
    switch(action.type) {
        case "LOADING_PICS":
            return {loading: true, pictures: [...state.pictures] } 
        case "FETCH_PICS": 
            debugger
            return {...state, pictures: action.payload, loading: false}
        default: 
            return state
    }
}