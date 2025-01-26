import React from "react";

function StudentData({ studentPropsdata}) {
  return (
    <div className="flex flex-wrap justify-center">
      {studentPropsdata.map((studentData, index) => {
        return (
          <div className="border shadow-lg w-1/4" key={index}>
            <img src={studentData.url} />
            <h1 className="text-5xl">{studentData.albumId}</h1>
            <img src={studentData.thumbnailUrl} />
            <p>{studentData.title}</p>
            <img src={studentData.url} />
          </div>
        );
      })}
    </div>
  );
}

export default StudentData;
