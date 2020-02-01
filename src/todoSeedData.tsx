import React from "react";
import { TodoI } from "./components/TodoComponent";

const todos: TodoI[] = [
  {
    complete: false,
    description: "fly pigs",
    task: "do the impossible",
    id: 1
  },
  {
    task: "win the superb owl",
    complete: false,
    description:
      "mutual intersest in this task by Patty M and those Frisco boys",
    id: 2
  }
];

export { todos };
