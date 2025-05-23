import { useLocation } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
const ProductListing = () => {
  
  const location = useLocation(); // Use location to access state
  const { productData } = location.state || {}; // Destructure productData from location state

  console.log("Product Data:", productData); // Log to check if the data is being received

  return (

    

<div className='w-screen bg-white m-0 p-0'>

  

{productData ?  (
  <><h1 className="text-2xl font-bold p-6 text-center">{productData.heading}</h1><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-6 pb-6">
          {productData.products?.map((product, index) => (
            <div key={index} className="relative w-[80%] h-[100%] border p-4 rounded shadow text-center product-item">


              <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
                <AiOutlineHeart className="relative -left-2 -bottom-2" size={24} />
              </button>

              <div className="overflow-hidden flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover mx-auto" />
              </div>
              <h2 className="mt-2 text-base font-semibold">{product.name}</h2>
              <p className="text-gray-700">Price: ₹{product.price}</p>
            </div>
          ))}
        </div></>
):<h1 className='text-5xl text-center'>No Data Found</h1>}
</div>
















)}




export default ProductListing;
