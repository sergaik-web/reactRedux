import React, { Component } from "react";
import CreateList from "../create-list";
import ItemCreateForm from "../item-create-form";
import SearchPanel from "../search-panel";
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { text: "1 lb Salmon", status: false, id: 1},
        { text: "1 cup Pine Nuts", status: false, id: 2},
        { text: "2 cups Butter Lettuce", status: false, id: 3},
        { text: "1 Yellow Squash", status: false , id: 4},
        { text: "1/2 cup Olive Oil", status: false , id: 5},
        { text: "3 cloves of Garlic", status: false , id: 6},
      ],
      maxId: 6,
      filter:''
    };
  }

  addItem = (text) => {
    this.setState(({data}) =>{
      const newId = this.state.maxId+1;
      const newArr = [...data, {text:text, status:false, id:newId}];
      return{
        data: newArr,
        maxId: newId
      }
    })
  };

  onDeleteItem=(id)=>{
    this.setState(({data})=> {
      const index = data.findIndex(e => e.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index+1)];
      return {
        data: newArr
      };
    })
  };

  onSearch=(e)=>{
    this.setState(({filter})=>{
      return {
        filter: e
      }
    })
  };

  onFilter=(elements, filter)=>{
    if (filter.length>0) {
      return elements.filter(element => element.text.includes(filter));
    } else {
      return elements;
    }
  };

  render() {
    const visibleItem = this.onFilter(this.state.data, this.state.filter);
    return (
      <div className="App">
        <header className="App-header">
          <SearchPanel
              onSearch={this.onSearch}
          />
          <CreateList data={visibleItem} onDeleteItem={this.onDeleteItem}/>
          <ItemCreateForm addItem={this.addItem} />
        </header>
      </div>
    );
  }
}
