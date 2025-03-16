import allCategoryData from "../Data/AllCategory.json";
//import { useState } from "react";
function Category() {
  //const [AllCategory, setAllCategory] = useState(allCategoryData);
  return (
    <div className="w-full bg-[#f1f2f4] min-h-screen pt-4 px-20 ">
      <div className="flex bg-white justify-evenly text-center px-40">
        {allCategoryData?.allCategory?.map((category) => (
          <div className="my-5 " key={category.id}>
            <div>
              <img src={category.image} />
            </div>
            <p className="font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}
export default Category;
