import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import {
        fetchBooks, 
        loadMoreBooks,
        addBookToBasket,
        fetchCategories
    } from '../../actions'
import { getBooks } from '../../selectors'
import Layout from '../layout'
import Categories from '../../components/categories'

import './books.css'

class Books extends Component { 

    componentDidMount() {
        this.props.fetchBooks()
        this.props.fetchCategories()
        
    }

    renderBook(book, index) {        

        const {addBookToBasket} = this.props

        return (         
            <li className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="card mb-5">            
                    <a href="!#" className="card__img-block">
                        <img 
                            src={book.preview} 
                            className="img-fluid" 
                            alt={book.name} >
                        </img>
                    </a>                        
                    <div className="card-body">
                        <Link to={`/books/${book.id}`} className="card__title">
                            {book.name}
                        </Link>
                        <p className="card__text text-muted">{book.author}</p>
                        <p className="card__price text-secondary">
                            {book.price} 
                            <i className="fas fa-ruble-sign ml-1"></i>
                        </p>
                    </div>                                                                 
                    <div className="card-footer">
                        <button 
                            className="btn btn-info"
                            onClick={() => addBookToBasket(book.id)}>
                            КУПИТЬ
                        </button>
                    </div>
                </div>                            
            </li>
        )
    }   

    render() {

        const { books, loadMoreBooks } = this.props

        return (
            <Layout>
                <section className="book-list"> 
                    <div className="row">
                        <h2 className="col book-list__title text-center">Книги</h2>
                    </div>
                    <div className="row">
                        <Categories />                        
                        <div className="col-lg-9">
                            <ul className="book-list__list row">  
                                {books.map((book, index) => this.renderBook(book, index))}
                            </ul>                                                                              
                        </div>
                    </div>                       
                    <div className="row">
                        <div className="ml-auto col-lg-9 text-center">
                            <button
                                className="btn btn-warning"
                                onClick={loadMoreBooks}>
                                    Load more
                            </button>
                        </div>
                    </div>
                </section>                            
            </Layout>           
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    books: getBooks(state, ownProps)
})

const mapDispatchToProps = {
    fetchBooks,
    loadMoreBooks,
    addBookToBasket,
    fetchCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)