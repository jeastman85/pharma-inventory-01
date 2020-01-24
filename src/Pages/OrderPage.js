import React from "react";
import Inventory from "../Components/OrderPage/Inventory";
import { PharmaConsumer } from "../Components/context/context";
import NewOrder from "../Components/NewOrder/NewOrder";

export default function OrderPage() {
  return (
    <>
      <Inventory />
      <hr />
      <h3>Place Pharmacy Order</h3>
      <PharmaConsumer>
        {value => {
          const { handleNewOrder, isNewOrder } = value;
          return (
            <>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleNewOrder}
              >
                Create New Order
              </button>
              <br />
              <br />
              {isNewOrder ? <NewOrder /> : <p>Nothing</p>}
            </>
          );
        }}
      </PharmaConsumer>
    </>
  );
}
