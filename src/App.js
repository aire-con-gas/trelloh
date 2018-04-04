import React, { Component } from "react";
import logo from "./logo.svg";

import Column from "./Column";
import "./App.css";

const mockItems = [
  {
    id: 123,
    title: "Foo",
    desc: "Foo foo",
    status: "OPEN"
  },
  {
    id: 234,
    title: "Foo2",
    desc: "Foo foo",
    status: "IN_PROGRESS"
  },
  {
    id: 345,
    title: "Foo3",
    desc: "Foo foo",
    status: "CODE_REVIEW"
  },
  {
    id: 4546,
    title: "Foo4",
    desc: "Foo foo",
    status: "DONE"
  }
];

const styleWrapper = {
  margin: "10px"
};

const style = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center"
};

class App extends Component {
  filterItems(status) {
    return mockItems.filter(item => item.status === status);
  }

  render() {
    return (
      <div style={styleWrapper}>
        <div style={style}>
          <Column title="Open" items={this.filterItems("OPEN")} />
          <Column title="In Progress" items={this.filterItems("IN_PROGRESS")} />
          <Column title="Code Review" items={this.filterItems("CODE_REVIEW")} />
          <Column title="Done" items={this.filterItems("DONE")} />
        </div>
      </div>
    );
  }
}

export default App;
