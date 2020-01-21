import React, { Component } from "react";
import uuid from "uuid";
import PharmaList from "./productData";
const PharmaContext = React.createContext();

class PharmaProvider extends Component {
  state = {
    order: uuid(),
    isNewOrder: false,
    inventory: PharmaList,
    items: 10
  };

  render() {
    return (
      <PharmaContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </PharmaContext.Provider>
    );
  }
}

const PharmaConsumer = PharmaContext.Consumer;

export { PharmaProvider, PharmaConsumer };
