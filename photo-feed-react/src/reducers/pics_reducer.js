export default function picsReducer (state = {
    pics: [],
    loading: false
}, action) {
    switch(action.type) {
        case "LOADING_PICS":
            return {loading: true, pics: [...state.pics] } 
        case "FETCH_PICS": 
            return {...state, pics: action.payload, loading: false}
        default: 
            return state
    }
}