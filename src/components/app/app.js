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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build App'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Enjoy App')
    ],

    search: ''
  }

  createTodoItem(label) {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
  }


  onDeleted = (id) => {
    this.setState(({todoData}) => {
    
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

  AddItem = (label) => {

    this.setState(({todoData }) => {
      const newItem = this.createTodoItem(label);

      return {
        todoData: [...todoData, newItem],
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  toggleProperty(arr, id, propName) {

    const idx = arr.findIndex( el => el.id === id)

    const oldItem = arr[idx];
    const newItem = {
      ...oldItem, 
      [propName]: !oldItem[propName]
    };

    return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ]
  }

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  onSearchChange = (search) => {
    this.setState({ search });
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  render () {
    const {todoData, search} = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    const visibleData = this.searchItems(todoData, search);

    return (

      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel searchItem={this.onSearchChange}/>
          <ItemStatusFilter />
        </div>

        <TodoList
          todos = {visibleData}
          onDeleted = {this.onDeleted}
          onToggleDone = {this.onToggleDone}
          onToggleImportant =  {this.onToggleImportant}
        />

        <AddItem
          createTodoItem = {this.AddItem}
        />
      </div>
    )
  }
}
