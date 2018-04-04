import React from "react";
import Task from "./Task";

const style = {
  flex: "1 0 24%",
  marginRight: "5px"
};

const Column = props => {
  const { title, items } = props;

  return (
    <div style={style}>
      <span>{title}</span>
      <div>{items.map(item => <Task id={item.id} title={item.title} />)}</div>
    </div>
  );
};

export default Column;
