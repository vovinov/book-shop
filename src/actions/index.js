import {
    FETCH_BOOKS_START,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURES,
    LOAD_MORE_BOOKS_START,
    LOAD_MORE_BOOKS_SUCCESS,
    LOAD_MORE_BOOKS_FAILURES,
    FETCH_BOOK_BY_ID_START,
    FETCH_BOOK_BY_ID_SUCCESS,
    FETCH_BOOK_BY_ID_FAILURES,
    ADD_BOOK_TO_BASKET,
    SEARCH_BOOK,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURES,
    REMOVE_BOOK_FROM_BASKET,
    REMOVE_ALL_FROM_BASKET
} from '../actionTypes'

import {fetchBooks as fetchBooksApi,
        loadMoreBooks as loadMoreBooksApi,
        fetchBookById as fetchBookByIdApi,
        fetchCategories as fetchCAtegoriesApi} from '../api'

import {getRenderedBooksNumber} from '../selectors' 


export const fetchBooks = () => async dispatch => {
    dispatch({type: FETCH_BOOKS_START})

    try {
        const books = await fetchBooksApi()
        dispatch({
            type: FETCH_BOOKS_SUCCESS,
            payload: books            
        })
    } catch (err) {
        dispatch({
            type: FETCH_BOOKS_FAILURES,
            payload: err,
            error: true
        })
    }
}

export const loadMoreBooks = () => async (dispatch, getState) => {

    const offset = getRenderedBooksNumber(getState())

    dispatch({type: LOAD_MORE_BOOKS_START})

    try {
        const books = await loadMoreBooksApi({offset})
        dispatch({
            type: LOAD_MORE_BOOKS_SUCCESS,
            payload: books            
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_BOOKS_FAILURES,
            payload: err,
            error: true
        })
    }
}

export const fetchBookById = id => async dispatch => {
    dispatch({type: FETCH_BOOK_BY_ID_START})

    try {
        const book = await fetchBookByIdApi(id)
        dispatch({
            type: FETCH_BOOK_BY_ID_SUCCESS,
            payload: book            
        })
    } catch (err) {
        dispatch({
            type: FETCH_BOOK_BY_ID_FAILURES,
            payload: err,
            error: true
        })
    }
}

export const addBookToBasket = id => dispatch => {
    dispatch({
        type: ADD_BOOK_TO_BASKET,
        payload: id
    })
}

export const searchBook = text => dispatch => {
    dispatch({
        type: SEARCH_BOOK,
        payload: text
    })
}

export const fetchCategories = () => async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START})

    try {
        const categories = await fetchCAtegoriesApi()
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories           
        })
    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURES,
            payload: err,
            error: true
        })
    }
}

export const removeBookFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_BOOK_FROM_BASKET,
        payload: id
    })
}

export const removeAllFromBasket = () => dispatch => {
    dispatch({type: REMOVE_ALL_FROM_BASKET})
}
