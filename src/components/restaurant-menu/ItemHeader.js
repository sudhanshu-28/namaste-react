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

export default ItemHeader;
