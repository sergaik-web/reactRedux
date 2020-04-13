import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import CreateItemList from "../create-item-list";

export default class CreateList extends Component {
  constructor(props) {
    super();
    this.items = props.data;
  }

  render() {
    const itemList = this.items.map((elem, i) => {
      return <CreateItemList {...elem} key={i} />;
    });
    return <ListGroup>{itemList}</ListGroup>;
  }
}
