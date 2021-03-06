import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchBook } from '../../actions'


class Search extends Component {

    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchBook(this.state.value)
    }

    render() {
        return (
            <form 
                className="form-inline my-2 my-lg-0"
                onSubmit={this.handleSubmit} >
                <input 
                    className="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Search" 
                    onChange={this.handleChange}
                />
                <button 
                    className="btn btn-secondary my-2 my-sm-0" 
                    type="submit">
                        Поиск
                </button>
            </form> 
        )
    }
}

const mapDispatchToProps = {
    searchBook
}

export default connect(null, mapDispatchToProps)(Search)
