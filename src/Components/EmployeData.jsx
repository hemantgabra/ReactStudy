import React from "react";
function EmployeData({ EmployeData }) {
  return (
    <div className="flex flex-wrap justify-center">
      {EmployeData.map((employeData, index) => {
        return (
          <div className="border shadow-lg w-1/4" key={index}>
            <h1 className="text-5xl">{employeData.userId}</h1>
            <h1 className="text-5xl">{employeData.id}</h1>
            <p>{employeData.title}</p>
           <p>{employeData.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default EmployeData;
