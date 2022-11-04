import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    todoList : [],
  }

  render(){
    return (
      <div className="bg-dark p-3">
        {/* heding */}
        <div className="jumbotron jumbotron-fluid mb-3 bg-light">
          <div className="container">
            <h1 className="display-2">Todo App</h1>
          </div>
        </div>
        {/* form add items */}
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" name="todoTask" className="form-control" placeholder='Please enter your task ..' autoComplete='off'/>
              <button type="submit" className="btn btn-light border border-3 border-warning">Add</button>
          </div>
        </form>
        <ul className="list-group mt-3">
          {
            this.state.todoList.map(
              (item, index) => {
                return <div className="d-flex">
                  <li className="list-group-item p-2 align-items-center w-100" key={index}>
                    {item}
                    <button className="btn btn-outline-danger border border-3 border-danger fw-bold float-end" onClick={(event) => this.deleteTodoTask(event,index)}>Delete</button>
                  </li>
                </div>
              }
            )
          }
        </ul>
      </div>
    );
  }

  handleSubmit = (event) =>{
    var taskDesc = event.target.elements.todoTask.value;
    if(taskDesc.length > 0){
      this.setState({
        todoList: [...this.state.todoList, taskDesc]
      })
  
      event.target.reset();
    }
    event.preventDefault();
    
  }

  deleteTodoTask = (event,index) => {
    var taskArray = [...this.state.todoList]
    taskArray.splice(index, 1)
    this.setState({todoList : taskArray})

  }
}

export default App;
