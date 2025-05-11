import { useLocation } from 'react-router-dom';

const ProductListing = () => {
  const location = useLocation(); // Use location to access state
  const { productData } = location.state || {}; // Destructure productData from location state

  console.log("Product Data:", productData); // Log to check if the data is being received

  return (
    <div>
      {productData ? (
        <>
          <h1>{productData.heading}</h1> {/* Displaying heading */}
          <div>
            {productData.products?.map((product, index) => (
              <div key={index} className="product-item">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Price: ₹{product.price}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No product data available</p> // Fallback message if no data is available
      )}
    </div>
  );
};

export default ProductListing;
