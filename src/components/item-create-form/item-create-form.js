import React, { Component } from "react";
import {Button, InputGroup, InputGroupAddon, Input} from 'reactstrap';

export default class ItemCreateForm extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue: ''
        }
    }

    onInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };

    onSubmit=(e)=>{
        e.preventDefault();
        if (this.state.inputValue === ''){
            alert('Укажите наименование ингридиента')
        } else {
            this.props.addItem(this.state.inputValue);
            this.setState({
                inputValue: ''
            })
        }
    };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <InputGroup>
              <Input type={"text"}
                     placeholder={"Ингридиент"}
                     onChange={this.onInput}
                     value={this.state.inputValue}/>
              <InputGroupAddon addonType="prepend">
                  <Button type={'submit'} color='secondary'>
                      Добавить
                  </Button>
              </InputGroupAddon>
          </InputGroup>
      </form>


    );
  }
}
