import React, { Component } from "react";
import uuid from "uuid";
import PharmaList from "./productData";
const PharmaContext = React.createContext();

class PharmaProvider extends Component {
  state = {
    order: uuid(),
    isNewOrder: false,
    inventory: PharmaList,
    items: 10,
    new_order: []
  };

  handleNewOrder = () => {
    console.log("New Order Created");

    this.setState({
      isNewOrder: !this.state.isNewOrder
    });
  };

  handleAddItem = id => {
    const addedItem = this.state.inventory.find(item => item.id === id);
    const totalitems = 0;

    const current_order_id = this.state.order;

    const updated_order = {
      orderid: current_order_id,
      currentitem: addedItem.name,
      itemqty: 1
    };

    const updatedOrderList = [...this.state.new_order, updated_order];

    this.setState({
      new_order: updatedOrderList
    });

    console.log("item added");
    console.log(id);
  };

  render() {
    return (
      <PharmaContext.Provider
        value={{
          ...this.state,
          handleAddItem: this.handleAddItem,
          handleNewOrder: this.handleNewOrder
        }}
      >
        {this.props.children}
      </PharmaContext.Provider>
    );
  }
}

const PharmaConsumer = PharmaContext.Consumer;

export { PharmaProvider, PharmaConsumer };
