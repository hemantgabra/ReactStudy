
const ProductListing = () => {
  const location = useLocation(); // Use location to access state
  const { productData } = location.state || {}; // Destructure productData from location state

  console.log("Product Data:", productData); // Log to check if the data is being received

  return (
    <div className='mt-2'>
      {productData ? (
        <>
          <h1>{productData.heading}</h1> {/* Displaying heading */}
          <div className=' p-4'>
            
            <div className=' flex justify-between'>
              {productData.products?.map((product, index) => (
                <div key={index} className="product-item p-5 w-[18%]" >
                  <img src={product.image} alt={product.name} className="w-full h-[350px] object-cover rounded-lg mb-4" />
                  <h2 className='font-semibold text-[1.35rem]'>{product.name}</h2>
                  <p className='font-semibold text-2xl'>Price: ₹{product.price}</p>
                </div>
              ))}
            </div>

             <div className=' flex justify-between mt-5'>
              {productData.products?.map((product, index) => (
                <div key={index} className="product-item p-5 w-[18%]" >
                  <img src={product.image} alt={product.name} className="w-full h-[350px] object-cover rounded-lg mb-4" />
                  <h2 className='font-semibold text-[1.35rem]'>{product.name}</h2>
                  <p className='font-semibold text-2xl'>Price: ₹{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>No product data available</p> // Fallback message if no data is available
      )}
    </div>
  );
};

export default ProductListing;
