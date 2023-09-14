
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-4">
      <p className="text-2xl text-red-500">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;