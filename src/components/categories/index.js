import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {compose} from 'redux'
import classNames from 'classnames'
import * as R from 'ramda'

import {getCategories, getActiveCategoryId} from '../../selectors'


const Categories = ({categories, activeCategoryId}) => {   

    const getActiveState = R.propEq('id', activeCategoryId)

    const renderCategory = (category, index) => {

        const linkClass = classNames({
            'list-group-item': true,
            'list-group-item-action': true,
            'active': getActiveState(category)
        })

        return (
            <Link
                to={`/categories/${category.id}`}
                key={index}
                className={linkClass}>
                    {category.name}
            </Link>
        )
    } 
    
    const renderAllCategory = () => {

        const linkClass = classNames({
            'list-group-item': true,
            'list-group-item-action': true,
            'active': R.isNil(activeCategoryId)
        })

        return (
            <Link
                to="/"
                className={linkClass}>
                    Все
            </Link>
        )
    }
     
    return (
        <div className="col-lg-3 mb-5">
            <div className="list-group">
                {renderAllCategory()}
                {categories.map((category, index) => renderCategory(category, index))}               
            </div>
        </div>
    )

 }          

const mapStateToProps = (state, ownProps) => ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps) 

})

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(Categories)

