import React, {Component} from 'react';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
     message: 'Hello',
     newTodo: '',
     todos: [{
      title: 'Learn React',
      done: false
     },
     {
      title: 'Learn JSX',
      done: false
    }]
  };
}

newTodoChanged=(e)=> {
  console.log(e.target.value);
  this.setState({newTodo:e.target.value})
}
formSubmitted=(e)=>{
  e.preventDefault();
  console.log(this.state.newTodo)
  this.setState({
    todos:[...this.state.todos, {
      title: this.state.newTodo,
      done: false
  }]
});

console.log(this.state.todos)
}

render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
      <form onSubmit={this.formSubmitted}>
        <label htmlFor="newTodo">New Todo</label>
        <input onChange={this.newTodoChanged} id="newTodo" name="newTodo" value={this.state.newTodo}/>      
        <button type="submit">Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map((todo,i)=>{
            return <li key={i}>{todo.title}</li>
          })}
        </ul>
      </div>
    );
  }
}
  

export default App;
