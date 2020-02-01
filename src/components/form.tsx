import React, { ChangeEvent } from "react";
import { TodoI } from "./TodoComponent";

type inputOrTextArea =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface FormProp {
  appendTodo: (event: any) => void;
}

class TodoForm extends React.Component<FormProp, TodoI> {
  constructor() {
    super({ appendTodo: () => {} });
    this.state = {
      complete: false,
      description: "",
      task: ""
    };
  }

  checkBoxHandle = (event: React.ChangeEvent) => {
    this.setState(prevState => ({
      complete: !prevState.complete
    }));
  };

  textHandle = (event: inputOrTextArea) => {
    //@ts-ignore
    this.setState({
      [event.target.name as any]: event.target.value
    });
    console.log(this.state);
  };

  sendStateBackUp = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.appendTodo(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.sendStateBackUp}>
          <ul className="flex-outer">
            <li>
              <label className="create">create a new todo</label>
            </li>
            <li>
              <label htmlFor="complete-id">complete</label>
              <input
                type="checkbox"
                id="complete-id"
                name="complete"
                checked={this.state.complete}
                onChange={this.checkBoxHandle}
              />
            </li>

            <li>
              <label htmlFor="description-id">description</label>
              <textarea
                cols={35}
                rows={4}
                id="description-id"
                name="description"
                placeholder="describe here"
                onChange={this.textHandle}
              />
            </li>

            <li>
              <label htmlFor="task-id">task</label>
              <input
                type="text"
                id="task-id"
                name="task"
                placeholder="task here"
                onChange={this.textHandle}
              />
            </li>
            <li>
              <button>submit new task </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export { TodoForm };
