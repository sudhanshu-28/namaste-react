const ShimmerCard = () => (
  <div className="rounded-lg h-auto shadow-md">
    <img className="rounded-t-lg w-72 h-56 bg-gray-200" />
    <div className="p-4 py-4 flex flex-col space-y-1">
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
      <div className="flex justify-between">
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
      </div>
      <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
      <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
    </div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="grid grid-cols-5 gap-4 gap-y-8 mt-[5rem] p-4 m-4">
      {Array.from({ length: 10 }, (_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
