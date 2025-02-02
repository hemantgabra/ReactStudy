
import React from "react";

function TableData({ Paradata }) {

    return (
        <div>

            <table>
                <tr className="border d-flex align-item-center text-2xl text-blue-700">
                    <td className="w-1/6 pt-2 pb-2 ">ID</td>
                    <td className="w-1/6 pt-2 pb-2">Title</td>
                    <td className="w-3/6 pt-2 pb-2">Body</td>
                </tr>

                {Paradata.map((TableData) => {
                    return (
                    
                            <tr className="border shadwo-lg pt-10">
                                <td>{TableData.id}</td>
                                <td className="f-flex align-item-left">{TableData.title}</td>
                                <td>{TableData.body}</td>
                            </tr>

                    
                    );
                })}
            </table>
        </div>





    );
}

export default TableData;