import React from "react";
import { useSelector } from "react-redux";
import ItemList from "../restaurant-menu/ItemList";

const Cart = () => {
  const { items = [] } = useSelector((state) => state.cart);

  return (
    <div className="p-4 mx-auto max-w-4xl">
      <h2 className="text-2xl">Cart</h2>

      <div className="border rounded-lg shadow-2xl p-4 mt-4">
        {items.length === 0 ? (
          <div className="h-20">
            <h2>{`Oops! Your cart looks empty.`}</h2>
          </div>
        ) : (
          <ItemList categories={items} isActiveCategory={true} />
        )}
      </div>
    </div>
  );
};

export default Cart;
