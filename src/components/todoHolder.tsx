import React from "react";
import { TodoI } from "./TodoComponent";
import { TodoComp } from "./TodoComponent";

interface TodoHolderProps {
  todoList: TodoI[];
}

class TodoHolder extends React.Component<TodoHolderProps> {
  constructor({ props }: { props: TodoHolderProps }) {
    super(props);
  }

  mapTodos = () => {
    return (
      <div>
        {this.props.todoList.map((item, idx) => {
          return <TodoComp key={idx} props={{ ...item }} />;
        })}
      </div>
    );
  };

  render() {
    return <div className="todoHolder">{this.mapTodos()}</div>;
  }
}

export { TodoHolder };
