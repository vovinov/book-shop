import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import books from './books'
import booksPage from './booksPage'
import bookPage from './bookPage'
import basket from './basket'
import categories from './categories'

export default history => combineReducers({
    books,
    booksPage,
    bookPage,
    basket,
    categories,
    router: connectRouter(history)
})