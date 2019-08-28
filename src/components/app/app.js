import React, { Component } from 'react';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItem from '../add-item';
import './app.css'


export default class App extends Component {

  maxId = 100;

  state = {
    todoData : [
      {label: 'Drink Coffe', important: false, id: 1, done: false},
      {label: 'Build App', important: true, id: 2, done: false},
      {label: 'Learn React', important: false, id:3, done: false}
    ],
    inputValue: ""
  }

  onDeleted = (id) => {
    this.setState(({todoData}) => {
      // todoData: todoData.filter( el => el.id !== id)

      const idx = todoData.findIndex((el) => el.id === id);

      const newArr = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newArr
      }

    });
  }

  onChange = (evt) => {
    this.setState({inputValue: evt.target.value})
  }

  AddItem = () => {
    this.setState(({todoData, inputValue }) => {
      const newItem = {label: inputValue , important: false, id: this.maxId++, done: false}

      return {
        todoData: [...todoData, newItem]
      }
    })
  }

  onToggleDone = (id) => {
    console.log("id", id)
  }

  onToggleImportant = (id) => {
    // this.setState(({todoData}) => {
    //   const updateItem =  todoData.filter( el => el.id !== id);

    //   return {
    //     todoData: [...todoData, updateItem.important = !updateItem.important, ...]
    //   }

    // });
    console.log(id);
  }

  render () {

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos = {this.state.todoData}
          onDeleted = {this.onDeleted}
          onToggleDone = {this.onToggleDone}
          onToggleImportant =  {this.onToggleImportant}
        />

        <AddItem
          AddItem = {this.AddItem}
          onChange  = {this.onChange}
        />
      </div>
    )
  }
}
