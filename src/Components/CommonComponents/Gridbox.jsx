import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

function Festivesection(grid_deal) {
    return (
        <div className="slider-container my-10">



            <div className="summer-container w-[30rem]">
                <div className="text-2xl font-semibold px-[2rem] py-[1.3rem]  bg-[white] flex items-center justify-between">
                    <p>Summer Fashion</p>
                    <FaArrowCircleRight className="text-blue-500" />
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-[white]" >
                    {
                        grid_deal.grid_deal.map((item) => (
                            <div key={item.id} className="flex flex-col  border-2 border-gray-200 p-5 rounded-md ">
                                <img src={item.image} className="h-[10.5rem] w-full object-cover rounded-md  transition-all duration-300  hover:scale-105" />
                                <p className="font-semibold  mt-3">{item.title}</p>
                                <span className="font-semibold text-[1.2rem] text-green-500">{item.deal}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Festivesection;