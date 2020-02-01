import React from "react";
import { TodoI } from "./TodoComponent";
import { TodoComp } from "./TodoComponent";

interface TodoHolderProps {
  todoList: TodoI[];
  deleteFunc: (id: number) => void;
}

class TodoHolder extends React.Component<TodoHolderProps> {
  constructor({ props }: { props: TodoHolderProps }) {
    super(props);
  }

  mapTodos = () => {
    return (
      <div>
        {this.props.todoList.map((item, idx) => {
          console.log("props receiving from parent", this.props);
          let bundle = {
            removeFunc: this.props.deleteFunc,
            ...item
          };
          return <TodoComp key={idx} props={{ ...bundle }} />;
        })}
      </div>
    );
  };

  render() {
    return <div className="todoHolder">{this.mapTodos()}</div>;
  }
}

export { TodoHolder };
