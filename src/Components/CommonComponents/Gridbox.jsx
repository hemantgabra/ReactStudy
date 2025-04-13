import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

function Festivesection(grid_deal) {
    return (
        <div className="slider-container my-10 flex flex-row">

            {/* {JSON.stringify(grid_deal)} */}


            


            <div className="summer w-[30rem]">
                <div className="text-2xl font-semibold px-[2rem] py-[1.3rem]  bg-[white] flex items-center justify-between">
                    <p>Summer Fashion</p>
                    <FaArrowCircleRight className="text-blue-500" />
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-[white]" >
                    {
                        grid_deal.grid_deal.map((item) => (
                            <div key={item.id} className="flex flex-col  border-2 border-gray-200 p-5 rounded-md">
                                <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2" />
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-500">{item.description}</p>
                                <p className="text-blue-500 font-semibold mt-2">{item.price}</p>
                                
                                
                            </div>
                        ))}
                </div>
            </div>


        </div>
    );
}

export default Festivesection;