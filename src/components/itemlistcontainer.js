import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from "../products.json";

const ItemListContainer = () => {
  const { category: categoryFromParams } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromParams || '');
  const navigate = useNavigate();

  useEffect(() => {
    let displayedProducts = products;

    if (selectedCategory) {
      displayedProducts = products.filter((product) => product.category === selectedCategory);
    }

    setFilteredProducts(displayedProducts);
  }, [selectedCategory, categoryFromParams]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);

    if (newCategory) {
      navigate(`/category/${newCategory}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <div className="mb-4 flex justify-center">
        <div className="bg-gray-100 p-4 rounded shadow-md w-64">
          <label htmlFor="categoryFilter" className="block text-gray-700 font-semibold mb-2">Filter by Category:</label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="hoodie">Hoodie</option>
            <option value="remera">Remera</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded overflow-hidden shadow-lg">
              <ProductImage image={product.image} imageHover={product.imageHover} name={product.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                  Price: {product.price}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a href={'/item/' + product.id} rel="noopener noreferrer" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">View details</a>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found...</p>
        )}
      </div>
    </div>
  );
};

const ProductImage = ({ image, imageHover, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-64"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`absolute top-0 left-0 w-full h-64 object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        src={`https:${image}`}
        alt={`${name} image`}
      />
      <img
        className={`absolute top-0 left-0 w-full h-64 object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        src={`https:${imageHover}`}
        alt={`${name} hover image`}
      />
    </div>
  );
};

export default ItemListContainer;
