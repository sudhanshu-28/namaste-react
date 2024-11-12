import React from "react";
import MenuItems from "./MenuItems";

const ItemHeader = ({
  title,
  categories,
  isActiveCategory,
  setCategoryActive,
}) => (
  <div className="flex justify-between items-center">
    <div className="font-bold text-lg py-4">{`${title} (${categories.length})`}</div>
    <button
      className={`text-sm text-blue-600 cursor-pointer items-center`}
      onClick={setCategoryActive}
    >
      {isActiveCategory ? "Close" : "Expand"}
    </button>
  </div>
);

const ItemList = ({ categories, isActiveCategory }) => (
  <>
    {isActiveCategory && (
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
