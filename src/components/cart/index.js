import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../restaurant-menu/ItemList";
import { clearCart } from "../../store/cartSlice";

const Cart = () => {
  const { items = [] } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 mx-auto max-w-4xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-800">Cart</h2>
        {items.length !== 0 && (
          <h2
            className="text-sm text-blue-600 hover:underline cursor-pointer"
            onClick={handleClearCart}
          >
            {`Clear All`}
          </h2>
        )}
      </div>

      <div className="border rounded-lg shadow-2xl p-4 mt-4">
        {items.length === 0 ? (
          <div className="h-20 flex items-center justify-center">
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
