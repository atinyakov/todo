import React, { Component } from 'react';
import './add-item.css'

export default class AddItem extends Component {
    state = {
        label: ''
    }


    onChange = (evt) => {
        this.setState({label: evt.target.value});
    };
    
    AddItem = (evt) => {
        evt.preventDefault();
        this.state.label !== '' && this.props.createTodoItem(this.state.label);

        this.setState({
            label: ''
        });
    }

    render(){
        return (
            <form className="item-add-form d-flex" onSubmit = {this.AddItem}>
                <input
                    type      = "text"
                    className = "form-control"
                    onChange  = {this.onChange}
                    placeholder = "What do you want to do?"
                    value = {this.state.label}
                />
                <button
                    type="submit"
                    className = "btn btn-outline-secondary">
                        Add
                </button>
            </form>
        )
    }
}