import React from "react";

interface MyHeaderI {
  title: string;
  author: string;
  link?: string;
}

const MyHeader: React.FC<MyHeaderI> = (props: MyHeaderI) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h3>by {props.author}</h3>
    </header>
  );
};

export { MyHeader };
