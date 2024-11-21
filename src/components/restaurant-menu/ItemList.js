import MenuItems from "./MenuItems";

const ItemList = (props) => {
  const { categories, isActiveCategory } = props;

  return (
    <>
      {isActiveCategory && (
        <div className="flex flex-col space-y-4">
          {categories.map((record) => {
            const id = record?.card?.info?.id;

            return <MenuItems key={id} item={record} />;
          })}
        </div>
      )}
    </>
  );
};

export default ItemList;
