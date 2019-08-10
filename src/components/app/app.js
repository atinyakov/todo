import React, { Component } from 'react';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css'


export default class App extends Component {


  onDeleted = (id) => {
    console.log('id', id)
  }

  render () {
    const todoData = [
      {label: 'Drink Coffe', important: false, id: 1},
      {label: 'Build App', important: true, id: 2},
      {label: 'Learn React', important: false, id:3}
    ];

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos = {todoData}
        onDeleted = {this.onDeleted}/>
      </div>
    )
  }
}
