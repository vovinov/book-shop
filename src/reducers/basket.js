import * as R from 'ramda'; 

import {    ADD_BOOK_TO_BASKET,
            REMOVE_BOOK_FROM_BASKET,
            REMOVE_ALL_FROM_BASKET } from '../actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case ADD_BOOK_TO_BASKET:           
            return R.append(payload, state)
        case REMOVE_BOOK_FROM_BASKET:           
            return R.without([payload], state)
        case REMOVE_ALL_FROM_BASKET:           
            return initialState
        default:
            return state
    }    
}