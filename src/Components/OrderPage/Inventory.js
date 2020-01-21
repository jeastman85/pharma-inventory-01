import React from "react";
import styled from "styled-components";
import { PharmaConsumer } from "../context/context";
import InventoryItem from "./InventoryItem";

export default function Inventory() {
  console.log("TEST");
  return (
    <PharmaConsumer>
      {value => {
        const { items, inventory } = value;
        return (
          <>
            {inventory.map(item => {
              return (
                <InventoryItem
                  key={item.id}
                  name={item.name}
                  strength={item.strength}
                  qty={item.qty}
                />
              );
            })}
          </>
        );
      }}
    </PharmaConsumer>
  );
}

const InventoryWrapper = styled.div`
  background-color: #fefeeb;
  color: #404040;
`;
