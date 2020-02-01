import React from "react";
import { TodoI } from "./components/TodoComponent";

const todos: TodoI[] = [
  { complete: false, description: "fly pigs", task: "do the impossible" },
  {
    task: "win the superb owl",
    complete: false,
    description:
      "mutual intersest in this task by Patty M and those Frisco boys"
  }
];

export { todos };
