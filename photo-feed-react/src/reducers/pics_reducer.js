import * as types from '../actions/actionTypes';

export default function picsReducer (state = {
    pics: [],
    loading: false
}, action) {
    switch(action.type) {
        case types.LOADING_PICS:
            return {loading: true, pics: [...state.pics] } 
        case types.FETCH_PICS: 
            return {...state, pics: action.payload, loading: false}
        default: 
            return state
    }
}