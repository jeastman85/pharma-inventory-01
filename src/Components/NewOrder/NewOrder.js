import React from "react";
import styled from "styled-components";
import { PharmaConsumer } from "../context";

export default function NewOrder() {
  return (
    <PharmaConsumer>
      {value => {
        const { order, new_order } = value;
        return (
          <NewOrderWrapper>
            <span className="order-title">New Pharmacy Order</span>
            <div className="row">{order}</div>
            {new_order.map(item => {
              return (
                <li>
                  {item.currentitem}
                  {item.itemqty}
                </li>
              );
            })}
          </NewOrderWrapper>
        );
      }}
    </PharmaConsumer>
  );
}

const NewOrderWrapper = styled.div`
  background-color: #fafaf0;
  border-radius: 7px;
  border: 1px solid #4f4f4f;
  max-width: 40rem;
  padding: 7px;
  .order-title {
    font-family: sans-serif;
    font-size: 18px;
    color: #1d319e;
  }
`;
