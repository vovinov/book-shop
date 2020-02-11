import * as R from 'ramda'; 

import { FETCH_BOOK_BY_ID_SUCCESS } from '../actionTypes'

const initialState = {
    id: null    
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case FETCH_BOOK_BY_ID_SUCCESS:           
            return R.merge(state, {
                id: payload.id
            })              
        default:
            return state
    }    
}