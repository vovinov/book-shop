import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'

import {fetchBookById, addBookToBasket} from '../../actions'
import {getBookById} from '../../selectors'
import Layout from '../layout'

import './book.css'

class Book extends Component {

    componentDidMount() {        
        this.props.fetchBookById(this.props.match.params.id)
    }

    renderFields() {
        const {book} = this.props

        const fields = R.compose(
            R.toPairs,
            R.pick([
            'publishing',
            'size_page',
            'weight',
            'isbn',
            'format',
            'cover'
            ]))(book)        

        return fields.map(([key, value]) => (
            <div className="book__row" key={key}>
                <div className="book__key">{ this.translateKey(key) }</div>
                <div className="book_value">{ this.translateValue(value) }</div>
            </div>          
        ))
    }    

    translateKey(key) {
        switch (key) {
            case 'publishing': 
                return 'Издательство' 
            case 'size_page':
                return 'Количество страниц' 
            case  'weight':
                return 'Вес'
            case 'isbn':
                return 'ISBN' 
            case 'format':
                return 'Формат'
            case 'cover':
                return 'Обложка' 
            default: 
                return key
        }
    }

    translateValue(value) {
        switch (value) {
            case 'hard': 
                return 'Твердая' 
            case 'soft':
                return 'Мягкая' 
            default: 
                return value
        }
    }

    renderBook(book) {
        return ( 
            <div className="row">         
                <div className="col-md-6 text-center">
                    <img src={book.image} alt={book.name} className="book__img" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-start">
                    <div className="book__title">{book.name}</div>
                    <div className="book__author">{book.author}</div>
                    {this.renderFields()}
                    <div className="book__btn">
                        <button 
                            href='#!' 
                            type="button" 
                            className="btn btn-secondary btn-block"
                            onClick={() => this.props.addBookToBasket(book.id)}>
                            Купить
                        </button>
                    </div>
                </div> 
            </div>           
        )
    }

    render() {
        const {book} = this.props
        return (
            <Layout>
                <section className="book">
                    <div className="container">
                        {book && this.renderBook(book)} 
                    </div>
                </section>
            </Layout>
        )                    
    }
}

const mapStateToProps = state => {
    return {
        book: getBookById(state, state.bookPage.id)
    }
}

const mapDispatchToProps = {
    fetchBookById,
    addBookToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
