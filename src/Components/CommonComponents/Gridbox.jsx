import React, { useRef, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";


function Festivesection({ grid_deal }) {

    const [categories, setCategories] = useState(() => grid_deal || []);
    const [editingPostId, setEditingPostId] = useState(null);
    const [newTitle, setNewTitle] = useState("");




    const inputRef = useRef(null);
    const fileRef = useRef(null);


    const addcate = () => {
        const name = inputRef.current.value;
        const imageFile = fileRef.current.files[0];


        if (name === '' || !imageFile) {
            alert("Please enter name and select img.");
            return;
        };


        const newCategory = {
            id: categories.length + 1,
            name: name,
            image: URL.createObjectURL(imageFile),
            price: Math.floor(Math.random() * 500) + 100,
        }

        setCategories([...categories, newCategory]);
        inputRef.current.value = "";
        fileRef.current.value = null

    }


    const deletePost = (id) => {
        const updatedCategories = categories.filter(cat => cat.id !== id);
        setCategories(updatedCategories);
    };

    return (
        <div>

            <div className="slider-container my-10 flex flex-col">
                <div className="w-[33rem]">
                    <div className="text-2xl font-semibold px-[2rem] py-[2rem]  bg-[white] flex items-center justify-between">
                        {
                            grid_deal.map((item) => (
                                <div key={item.id} className="flex items-center gap-2">
                                    <p>{item.heading}</p>
                                </div>
                            ))
                        }

                        <FaArrowCircleRight className="text-blue-500" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4 bg-[white]" >
                        {
                            grid_deal.slice(1).map((item) => (
                                <div key={item.id} className="flex flex-col  border-2 border-gray-200 p-5 rounded-md">
                                    <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2 transition-transform duraction-300 hover:scale-105 " />
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-500">{item.deal}</p>
                                </div>
                            ))}



                        {categories.map((cat) => (
                            <div key={cat.id} className="bg-white p-3 rounded shadow-md relative">
                                <img
                                    src={cat.image}
                                    className="h-28 w-full object-cover rounded"
                                />
                                <h3 className="font-semibold mt-2">{cat.name}</h3>
                                <p className="text-sm">Price: ₹{cat.price}</p>
                                <button
                                    onClick={() => editpost(cat.id)}
                                    className="absolute top-2  bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs rounded"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deletePost(cat.id)}
                                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs rounded"
                                >
                                    Delete
                                </button>

                            </div>
                        ))}





                    </div>
                </div>



                <div className=" shadow-lg rounded-lg">
                    <h2 className="font-semibold px-6 mt-6 text-[1.5rem]">Crud Dummy Practice</h2>
                    <div className="font-semibold flex text-[0.9rem]  mt-3 px-1 shadow-lg items-center bg-gray-500 space-x-2">
                        <input
                            type="file"
                            ref={fileRef}
                            accept="image/*"
                            className="flex items-center justify-center w-[200px] "
                        />
                        <div>
                            <input
                                type="text"
                                placeholder="Add  category"
                                className="border rounded-md mr-1 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ref={inputRef}
                            />
                        </div>
                        <button onClick={addcate}
                            className="bg-blue-500 hover:bg-blue-600 p-2 text-[1rem] rounded-full mt-3 mb-3 text-white ">Upload Image
                        </button>
                    </div>
                </div>

            </div>


        </div >
    );
}

export default Festivesection;