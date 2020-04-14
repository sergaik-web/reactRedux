import React, { Component } from "react";
import { Button, ListGroupItem, ButtonGroup } from "reactstrap";
import "./create-item-list.css";

export default class CreateItemList extends Component {
  constructor(props) {
    super();
    this.text = props.text;
    this.state = {
      active: props.status,
    };
  }

  onAddItem = () => {
    this.setState(({ active }) => ({
      active: !active,
    }));
  };

  render() {
    return (
      <ListGroupItem active={this.state.active} tag="a" href="#" action>
        {this.text}

        <ButtonGroup style={{ marginLeft: "40px" }}>
          <Button
            onClick={this.onAddItem}
            outline
            color={this.state.active ? "danger" : "success"}
          >
            {this.state.active ? "Убрать блюдо" : "Включить в блюдо"}
          </Button>
          <Button onClick={this.props.onDeleteItem} outline color="danger">
            Удалить
          </Button>
        </ButtonGroup>
      </ListGroupItem>
    );
  }
}
