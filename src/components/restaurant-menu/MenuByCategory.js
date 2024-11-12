import React, { useState } from "react";
import MenuItems from "./MenuItems";

const ItemHeader = ({ title, categories, itemListOpen, setOpenItemList }) => (
  <div className="flex justify-between items-center">
    <div className="font-bold text-lg py-4">{`${title} (${categories.length})`}</div>
    <div
      className={`text-sm text-blue-600 cursor-pointer items-center`}
      onClick={() => setOpenItemList(!itemListOpen)}
    >
      {itemListOpen ? "Close" : "Expand"}
    </div>
  </div>
);

const ItemList = ({ categories, itemListOpen }) => (
  <>
    {itemListOpen && (
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
  const [itemListOpen, setOpenItemList] = useState(true);

  return (
    <div>
      <div className="h-4 bg-gray-200"></div>
      <div className="mx-4">
        <ItemHeader
          title={title}
          categories={categories}
          itemListOpen={itemListOpen}
          setOpenItemList={setOpenItemList}
        />
        <ItemList categories={categories} itemListOpen={itemListOpen} />
      </div>
    </div>
  );
};

export default MenuByCategory;
