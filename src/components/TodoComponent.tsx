import React from "react";

export interface TodoI {
  complete: boolean;
  task: string;
  description: string;
}

const TodoComp = ({ props }: { props: TodoI }) => {
  let completeString = props.complete ? "yep" : "nope";

  return (
    <div>
      <h3>{props.task}</h3>
      <p>{props.description}</p>
      <p>{completeString}</p>
    </div>
  );
};

export { TodoComp };
