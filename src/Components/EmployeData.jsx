import React from "react";
function EmployeData({ EmployeeData }) {
  return (
    <div className="flex flex-wrap justify-center">
      {EmployeeData.map((employeeData, index) => {
        return (
          // <div className="border shadow-lg w-1/4" key={index}>
          //   <h1 className="text-5xl">{employeeData.userId}</h1>
          //   <h1 className="text-5xl">{employeeData.id}</h1>
          //   <p>{employeeData.title}</p>
          //  <p>{employeeData.body}</p>
          // </div>
          <table className="border-collapse border border-gray-400 w-full"> 
          <thead>
              <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2 text-center ">userId</th>
                  <th className="border border-gray-400 px-4 py-2 text-center ">ID</th>
                  <th className="border border-gray-400 px-4 py-2 text-center w-1/3">title</th>
                  <th className="border border-gray-400 px-4 py-2 text-center w-1/3">body</th>
              </tr>
          </thead>
          <tbody>
              <tr key={index}>
                  <th>{employeeData.userId}</th>
                  <th>{employeeData.id}</th>
                  <th>{employeeData.title}</th>
                  <th>{employeeData.body}</th>
              </tr>
          </tbody>
      </table>
        );
      })}
    </div>
  );
}
export default EmployeData;
