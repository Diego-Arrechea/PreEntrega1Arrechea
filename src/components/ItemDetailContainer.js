import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from "../products.json";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const selectedProduct = products.find((product) => product.id === id);

                if (selectedProduct) {
                    setProduct(selectedProduct);
                } else {
                    console.error(`No se encontró ningún producto con el ID: ${id}`);
                }
            } catch (error) {
                console.error("Error al obtener los detalles del producto:", error);
            }
        };

        getProductDetails();
    }, [id]);

    return (
        <div className="container mx-auto mt-4">
            {product ? (
                <div>
                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-lg font-semibold mt-4">{product.price}</p>
                </div>
            ) : (
                <p className="text-2xl font-semibold">No se encontro el producto</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
