import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoComp } from "./components/TodoComponent";
import { MyHeader } from "./components/header";
import { TodoForm } from "./components/form";
import { TodoI } from "./components/TodoComponent";
import { todos } from "./todoSeedData";

interface AppState {
  todosList: TodoI[];
}
class App extends React.Component<any, AppState> {
  constructor() {
    super({});
    this.state = {
      todosList: todos
    };
  }

  addTodo = (newTodo: TodoI) => {
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo]
    }));
  };

  render() {
    let todosMapped = this.state.todosList.map((item, idx) => {
      return <TodoComp key={idx} props={{ ...item }} />;
    });
    return (
      <div className="wrapTheProject">
        <MyHeader author="me" title="todos" />
        <TodoForm appendTodo={this.addTodo} />
        {todosMapped}
      </div>
    );
  }
}

export default App;
