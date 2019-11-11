import React, {Component} from 'react';
import './App.css'
import ListItem from './ListItem'

const style = {
  container: {
    backgroundColor: 'yellow'
  },
}



class App extends Component {
  
  state = {
    //count: 0,

    // times: [],

    todos: [],
    value: '',
  }

  // add = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  // minus = () => {
  //   this.setState({
  //     count: this.state.count-1
  //   })
  // }

  // addTime = () => {
  //   let currentTimes = [...this.state.times]
  //   currentTimes.push(new Date().toString())
  //   this.setState({
  //       times: currentTimes
  //   })
  // }

  changeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  addTodo = () => {
    let newTodos = [...this.state.todos]
    newTodos.push({value: this.state.value, isDone: false})
    this.setState({
        todos: newTodos,
        value: ''
    })
  }

  onItemClickHandler = (index) => {
    let newTodos = [...this.state.todos]
    newTodos[index].isDone = !newTodos[index].isDone
    this.setState({
      todos: newTodos,
    })
  }

  render() {
    return(
      // <div className="App" style={style.container}>
      //   Count: {this.state.count}
      //   <button onClick={this.add}>+</button>
      //   <button onClick={this.minus}>-</button>
      // </div>

      // <div className="App">
      //   <ul>
      //     {this.state.times.map((time) => {
      //       return (
      //         <li>{time}</li>
      //       )
      //     }) }
      //   </ul>
      //   <button onClick={this.addTime}>Add Current Time</button>
      // </div>

      <div className="App">
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <ListItem />
              <li onClick={ () => {this.onItemClickHandler(index) }} className={ todo.isDone ? 'finish' : ''}>{todo.value}</li>
            )
          }) }
        </ul>
        <input type="text" onChange={this.changeHandler} value={this.state.value} />
        <button onClick={this.addTodo}>Add Current Time</button>
      </div>

    )
  }
}



export default App;
