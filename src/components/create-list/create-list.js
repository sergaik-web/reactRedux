import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import CreateItemList from "../create-item-list";

export default class CreateList extends Component {


  render() {
    const itemList = this.props.data.map((elements) => {
      const { id, ...element } = elements;
      return (
        <CreateItemList
          {...element}
          onDeleteItem={()=>this.props.onDeleteItem(id)}
          key={id}
        />
      );
    });
    return <ListGroup>{itemList}</ListGroup>;
  }
}
