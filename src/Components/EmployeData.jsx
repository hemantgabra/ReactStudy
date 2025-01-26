import React from "react";
function EmployeData({ EmployeeData }) {
  return (
    <div className="flex flex-wrap justify-center">
      {EmployeeData.map((employeeData, index) => {
        return (
          <div className="border shadow-lg w-1/4" key={index}>
            <h1 className="text-5xl">{employeeData.userId}</h1>
            <h1 className="text-5xl">{employeeData.id}</h1>
            <p>{employeeData.title}</p>
           <p>{employeeData.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default EmployeData;
