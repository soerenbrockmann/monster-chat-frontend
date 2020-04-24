import React, { Component } from 'react';
import './App.css';
import List from '../list/List';
import InputToDo from '../inputToDo/InputToDo';

class App extends Component {
  state = {
    listItem: [],
    inputValue: '',
  };

  addItem = (event) => {
    this.setState({
      listItem: [...this.state.listItem, this.state.inputValue],
    });
    event.preventDefault();
  };

  setInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className='App'>
        <InputToDo addItem={this.addItem} inputValue={this.state.inputValue} setInputValue={this.setInputValue} />
        <List listItem={this.state.listItem} addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
