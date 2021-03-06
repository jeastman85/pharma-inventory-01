import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";

export default function InventoryItem(item) {
  console.log(item);
  const { id, name, strength, qty, internalid, addItem } = item;
  return (
    <InventoryItemWrapper>
      {/* <p>{internalid}</p> */}
      <p className="item-title">{name}</p>
      <p>{strength}</p>
      <p>{qty}</p>
      <FaPlusCircle
        onClick={() => addItem(item.internalid)}
        style={{ cursor: "pointer" }}
      />
    </InventoryItemWrapper>
  );
}

const InventoryItemWrapper = styled.div`
  background-color: #b3f3f7;
  border-radius: 10px;
  margin: 5px;
  padding: 15px;
  max-width: 20rem;
  display: inline-block;
  .item-title {
    font-weight: bold;
    color: #43a9b0;
  }
`;
