import React, { Component } from "react";
import CreateList from "../create-list";
import { Button, Input } from "reactstrap";

let items = [
  { text: "1 lb Salmon", status: true },
  { text: "1 cup Pine Nuts", status: false },
  { text: "2 cups Butter Lettuce", status: false },
  { text: "1 Yellow Squash", status: false },
  { text: "1/2 cup Olive Oil", status: false },
  { text: "3 cloves of Garlic", status: false },
];

export default class App extends Component {
  addItem = () => {
    items.push({
      text: document.getElementById("input").value,
      status: false,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {<CreateList data={items} />}

          <Input id={"input"} type={"text"} placeholder={"Добавить строку"} />
          <Button onClick={this.addItem} color="success">
            Добавить
          </Button>
        </header>
      </div>
    );
  }
}
