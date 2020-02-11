import React from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import {Link} from 'react-router-dom'

import './basket.css'

import {getBasketBooksWithCount, getTotalBasketPrice } from '../../selectors'

import {removeBookFromBasket, removeAllFromBasket } from '../../actions'


const Basket = ({books, total, removeBookFromBasket, removeAllFromBasket}) => {   

    const isBasketEmpty = R.isEmpty(books)

    const renderContent = () => (        
        
        <div className="row">
            <div className="col">
                {isBasketEmpty 
                ? <h3 className="basket__heading">Корзина пуста</h3> 
                : <table className="table">
                    <thead>
                        <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {books.map((book, index) => {
                            return (
                                <tr key={index} className="text-center">
                                <th scope="row">
                                    <img src={book.preview} alt={book.name} className="img-thumbnail" />
                                </th>
                                <td className="table__name">{book.name}</td>
                                <td>{book.price}</td>
                                <td>{book.count}</td>
                                <td>
                                    <i  className="fas fa-trash-alt"
                                        onClick={() => removeBookFromBasket(book.id)}></i>
                                </td>
                                </tr>
                            )
                        })}                         
                    </tbody>
                </table>}
            </div>
        </div>                     
    )

    const renderSidebar = () => (
        <div>
          <Link
            className='btn btn-block btn-info'
            to='/'
          >            
            <span>Продолжить покупки</span>
          </Link>
          {
            R.not(isBasketEmpty) &&            
              <button               
                className='btn btn-block btn-danger'
                onClick={removeAllFromBasket}
              >                
                Очистить корзину
              </button>                        
          }
        </div>
    )

    return (
        <div className="container basket__container">
            <div className="row">
                <div className="col-md-9">
                    {renderContent()}
                </div>
                <div className="col-md-3">
                    {renderSidebar()}
                </div>   
            </div>                  
            {R.not(isBasketEmpty) &&
            <div className="row justify-content-end">
                <p className="basket__total">Total price: {total}</p>
            </div>
            }                                               
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        books: getBasketBooksWithCount(state),
        total: getTotalBasketPrice(state)
    }
    
}

const mapDispatchToProps = {
    removeBookFromBasket,
    removeAllFromBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
