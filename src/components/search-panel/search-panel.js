import React, { Component } from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";

export default class SearchPanel extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: "",
    };
  }

  onChangeValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.inputValue);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <InputGroup>
          <Input
            type={"text"}
            placeholder={"Поиск"}
            onChange={this.onChangeValue}
            value={this.state.inputValue}
          />
          <InputGroupAddon addonType="prepend">
            <Button onClick={this.onSearch} color="secondary">
              Поиск
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    );
  }
}
