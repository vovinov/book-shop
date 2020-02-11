import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import Search from '../search'


class Navigation extends Component {

    render() {

        
        const { totalBasketCount } = this.props       

        return (
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="!#">Bookshop</a>          
                <Search />               
               <Link to="/basket" className="btn btn-secondary my-2 my-sm-0">
                    <i className="fas fa-shopping-basket fa-lg mr-1"></i>
                    <span>Корзина</span>    
                    <span className="badge badge-success ml-2">{totalBasketCount > 0 && totalBasketCount}</span>
               </Link>                     
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        totalBasketCount: state.basket.length
    }
    
}

export default connect(mapStateToProps, null)(Navigation)