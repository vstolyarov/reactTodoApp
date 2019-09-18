import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
      newTodo: "",
      todos: [
        {
          title: "Learn React",
          done: false
        },
        {
          title: "Learn JSX",
          done: false
        }
      ]
    };
  }

  newTodoChanged = e => {
    console.log(e.target.value);
    this.setState({ newTodo: e.target.value });
  };
  formSubmitted = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }]
    });

  };

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy array
    todos[index] = { ...todos[index] }; // copy the todo
    todos[index].done = event.target.checked; //update done property on copied todo
    console.log(todos);
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    
    this.setState({
      todos
    });
  }

  allDone() {
    const todos=this.state.todos.map(todo=>{
      return {
        //spread the todo put all properties on object
        ...todo,
        done: true
      }
    });
  }
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">New Todo</label>
          <input
            onChange={this.newTodoChanged}
            id="newTodo"
            name="newTodo"
            value={this.state.newTodo}
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={()=>this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                <input
                  onChange={event => this.toggleTodoDone(event, index)}
                  type="checkbox" checked ={todo.done}
                />
 
                {/* <span 
                  style={{
                    textDecoration: todo.done ? "line-through" : "inherit"
                  }}
                >
                  {todo.title}
                </span> */
              }
                <span className={todo.done ? 'done' : ''}>{todo.title}</span>
                <button onClick={()=>this.removeTodo(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
