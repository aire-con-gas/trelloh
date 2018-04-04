import React from "react";

const style = {
  borderRadius: "5px",
  border: "1px solid gray"
};

const Task = props => {
  const { title } = props;
  return <div style={style}>{title}</div>;
};

export default Task;
