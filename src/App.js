import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  state = {
    task: "",
    list: []
  }
  
  updateTask = (e) => {
    //Update this.state.task
    this.setState({
      task: e.target.value
    })
  }

  addTaskToList = () => {
    // Add task to this.state.list
    console.log(this.state.task)
  }

  render() {
    return (
      <div className='container'>
        
        <Header
          inputHandler={this.updateTask}
          clickHandler={this.addTaskToList}
        />
      </div>
    );
  }
}

export default App;
