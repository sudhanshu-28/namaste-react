import React from "react";
import ItemHeader from "./ItemHeader";
import ItemList from "./ItemList";

const MenuByCategory = (props) => (
  <div>
    <div className="h-4 bg-gray-200"></div>
    <div className="mx-4">
      <ItemHeader {...props} />
      <ItemList {...props} />
    </div>
  </div>
);

export default MenuByCategory;
