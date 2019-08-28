import React, { Component } from 'react';
import './add-item.css'

export default class AddItem extends Component {

    render(){

        const {onChange, AddItem} = this.props;

        return (
            <div>
                <input
                    type      = "text"
                    className = "search-input"
                    onChange  = {onChange}
                />
                <button
                    type="submit"
                    className = "btn btn-outline-secondary"
                    onClick = {AddItem}>
                        Добавить
                </button>
            </div>
        )
    }
}