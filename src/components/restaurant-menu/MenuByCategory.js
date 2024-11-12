import React, { useState } from "react";
import MenuItems from "./MenuItems";

const ItemHeader = ({ title, categories, showItems, setShowItems }) => (
  <div className="flex justify-between items-center">
    <div className="font-bold text-lg py-4">{`${title} (${categories.length})`}</div>
    <div
      className={`text-sm text-blue-600 cursor-pointer items-center`}
      onClick={() => setShowItems(!showItems)}
    >
      {showItems ? "Close" : "Expand"}
    </div>
  </div>
);

const ItemList = ({ categories, showItems }) => (
  <>
    {showItems && (
      <div className="flex flex-col space-y-4">
        {categories.map((record) => {
          const id = record?.card?.info?.id;
          const item = record?.card?.info;

          return <MenuItems key={id} item={item} />;
        })}
      </div>
    )}
  </>
);

const MenuByCategory = (props) => {
  const { title, categories = [] } = props;
  const [showItems, setShowItems] = useState(true);

  return (
    <div>
      <div className="h-4 bg-gray-200"></div>
      <div className="mx-4">
        <ItemHeader
          title={title}
          categories={categories}
          showItems={showItems}
          setShowItems={setShowItems}
        />
        <ItemList categories={categories} showItems={showItems} />
      </div>
    </div>
  );
};

export default MenuByCategory;
