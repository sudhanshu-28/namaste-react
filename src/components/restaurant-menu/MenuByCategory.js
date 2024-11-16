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

    <span
      className="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 cursor-pointer"
      onClick={setCategoryActive}
    >
      {isActiveCategory ? "Close" : "Expand"}
    </span>
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
