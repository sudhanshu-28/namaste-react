export const getValidItemPrice = (itemInfo) => {
  const { finalPrice, defaultPrice, price } = itemInfo;
  const itemPrice = finalPrice || defaultPrice || price || "NA";

  if (itemPrice !== "NA") {
    return itemPrice / 100 || "NA";
  }

  return "NA";
};
