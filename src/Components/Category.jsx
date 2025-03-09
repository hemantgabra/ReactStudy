import allCategoryData from "../Data/AllCategory.json";
//import { useState } from "react";
function Category() {
  //const [AllCategory, setAllCategory] = useState(allCategoryData);
  return (
    <div>
      <div className="flex">
        {allCategoryData?.allCategory?.map((category) => (
          <div key={category.id}>
            <p>{category.name}</p>
            <div>
              <img src={category.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Category;
