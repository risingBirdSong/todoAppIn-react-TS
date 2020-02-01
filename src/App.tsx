import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoComp } from "./components/TodoComponent";
import { MyHeader } from "./components/header";
import { TodoForm } from "./components/form";
import { TodoI } from "./components/TodoComponent";
import { todos } from "./todoSeedData";
import { TodoHolder } from "./components/todoHolder";

interface AppState {
  todosList: TodoI[];
  showForm: boolean;
}
class App extends React.Component<any, AppState> {
  constructor() {
    super({});
    this.state = {
      todosList: todos,
      showForm: false
    };
  }

  addTodo = (newTodo: TodoI) => {
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo]
    }));
  };

  flip_form_visibility = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  };
  render() {
    // let todosMapped = this.state.todosList.map((item, idx) => {
    //   return <TodoComp key={idx} props={{ ...item }} />;
    // });
    if (this.state.showForm === true) {
      return (
        <div className="wrapTheProject">
          <MyHeader author="me" title="todos" />
          <div className="content">
            <TodoForm appendTodo={this.addTodo} />
            <button onClick={this.flip_form_visibility}>form visiblity</button>
            <TodoHolder todoList={this.state.todosList} />
          </div>
        </div>
      );
    } else
      return (
        <div className="wrapTheProject">
          <MyHeader author="me" title="todos" />
          <div className="buttonHold">
            {" "}
            <button
              className="top-level-button"
              onClick={this.flip_form_visibility}
            >
              form visiblity
            </button>
          </div>
          <div className="content">
            <TodoHolder todoList={this.state.todosList} />
          </div>
        </div>
      );
  }
}

export default App;
