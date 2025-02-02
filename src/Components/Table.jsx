import React from "react";
function Tabledata(){
    return(
        <>
        <table border={1}> 
            <thead>
                <tr>
                    <th>userId</th>
                    <th>ID</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </tbody>
        </table>
        </>
    );
}
export default Tabledata();