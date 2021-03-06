import React from 'react'
import {Switch, Route} from 'react-router'

import Books from './containers/books'
import Book from './containers/book'
import Basket from './containers/basket'

const routes = (
    <Switch>
        <Route path='/' component={Books} exact />
        <Route path='/books/:id' component={Book} />
        <Route path='/basket' component={Basket} />
        <Route path='/categories/:id' component={Books} />
    </Switch>
)

export default routes
