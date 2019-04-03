import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'

class App extends Component {
  state = {
    task: "",
    list: []
  }
  
  updateTask = (e) => {
    
    this.setState({
      task: e.target.value
    })

    if (e.key === 'Enter') {
      this.addTaskToList()
    }
  }

  addTaskToList = () => {

    if (this.state.task) {
      let tempList = this.state.list
    
      tempList.push(this.state.task)
      
      this.setState({
        list: tempList,
        task: ''
      })
    }  
    console.log(this.state.list);
    
  }

  removeItemFromList = (index) => {
    let tempList = this.state.list

    tempList.splice(index, 1)

    this.setState({
      list: tempList
    })
  }

  render() {
    return (
      <div className='container'>
        
        <Header
          inputHandler={this.updateTask}
          taskValue={this.state.task}
          clickHandler={this.addTaskToList}
        />
        <List 
          listItems={this.state.list}
          removeItemFromList={this.removeItemFromList}
        />
      </div>
    );
  }
}

export default App;
