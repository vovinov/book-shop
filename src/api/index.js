import books from './mockBooks'
import categories from './mockCategories'
import * as R from 'ramda'

export const fetchBooks = async () => {
    return new Promise((resolve, reject) => {
        resolve(books)
    })
}

export const loadMoreBooks = async ({offset}) => {
    return new Promise((resolve, reject) => {
        resolve(books)
    })
}

export const fetchBookById = async (id) => {
    return new Promise((resolve, reject) => {        
        const book = R.find(R.propEq('id', id), books)        
        resolve(book)
    })
}

export const fetchCategories = async () => {
    return new Promise((resolve, reject) => {       
        resolve(categories)
    })
}

