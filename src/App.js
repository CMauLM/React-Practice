import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      task: '',
      list: []
    }
  }
  updateTask() {
    //Update this.state.task
    console.log('OK');
    this.state.task = this.props.value
  }

  addTaskToList() {
    // Add task to this.state.list
    console.log('Button pressed');
  }

  render() {
    return (
      <div className='container'>
        {this.state.task}
        <Header
          inputHandler={this.updateTask}
          inputValue={this.inputValue}
          clickHandler={this.addTaskToList}
        />
      </div>
    );
  }
}

export default App;
