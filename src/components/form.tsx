import React, { ChangeEvent } from "react";
import { TodoI } from "./TodoComponent";
// prettier-ignore

type inputOrTextArea =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface FormProp {
  appendTodo: (event: any) => void;
}

interface formStateI {
  complete: boolean;
  task: string;
  description: string;
  id: number | undefined;
  remaining: number[];
}

class TodoForm extends React.Component<FormProp, formStateI> {
  constructor() {
    super({ appendTodo: () => {} });
    this.state = {
      complete: false,
      description: "",
      task: "",
      id: 3,
      remaining: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
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
  };

  sendStateBackUp = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    let numForId = this.state.remaining[0];

    this.setState(prevState => ({
      id: numForId,
      remaining: prevState.remaining.slice(1)
    }));

    console.log(this.state);

    this.props.appendTodo(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.sendStateBackUp}>
          <ul className="flex-outer">
            <p className="create">create a new todo</p>
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
              <button className="MyButton">submit new task </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export { TodoForm };
