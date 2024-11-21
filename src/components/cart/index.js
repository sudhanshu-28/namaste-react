import React from "react";
import { Link } from "react-router-dom";
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

      <div className="border rounded-lg shadow-2xl p-6 mt-4">
        {items.length === 0 ? (
          <div className="h-20 flex flex-col items-center justify-center space-y-2">
            <h2 className="text-lg">{`Oops! Your cart looks empty.`}</h2>
            <Link to={"/"}>
              <button className="border rounded-lg p-2 bg-slate-200 text-gray-600 font-semibold">
                {`View All Restaurants`}
              </button>
            </Link>
          </div>
        ) : (
          <ItemList categories={items} isActiveCategory={true} />
        )}
      </div>
    </div>
  );
};

export default Cart;
