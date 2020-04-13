import React, { Component } from "react";
import { Button, ListGroupItem } from "reactstrap";
import "./create-item-list.css";

export default class CreateItemList extends Component {
  constructor(props) {
    super();
    this.text = props.text;
    this.state = {
      active: props.status,
    };
  }

  clickGroupItem = () => {
    this.setState(({ active }) => ({
      active: !active,
    }));
  };

  render() {
    return (
      <ListGroupItem active={this.state.active} tag="a" href="#" action>
        {this.text}

        <Button onClick={this.clickGroupItem} outline color="info">
          {String(this.state.active)}
        </Button>
      </ListGroupItem>
    );
  }
}
