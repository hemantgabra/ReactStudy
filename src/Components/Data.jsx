
import React from "react";

function Data({ Paradata }) {

    return (
        <div className="flex flex-wrap justify-center">
            {Paradata.map((Data, index) => {
                return (
                    <div className="border shadow-lg w-1/3 d-flex align-item-center pt-3" key={index}>
                        <h1 className="text-3xl text-center"> ID : {Data.id}</h1>
                        <p className="d-flex pl-2 pr-1 text-1xl text-blue-700 "> Title : {Data.title}</p>
                        <h3 className="d-flex pl-2 pr-1 mt-1 mb-2 text-1xl text-red-800 "> Body : {Data.body}</h3>

                    </div>
                );
            })}
        </div>
    );
}

export default Data;