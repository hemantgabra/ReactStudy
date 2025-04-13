import allCategoryData from "../Data/AllCategory.json";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function Category() {
  const categoryWithDropdown = allCategoryData?.allCategory?.filter(
    (category) => {
      return (
        category.fashionData ||
        category.electronicsData ||
        category["home&furnitureData"] ||
        category["beauty&toysData"] ||
        category.wheelarsData
      );
    }
  );
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="w-full bg-[#f1f2f4]  pt-4 ">
      <div className="flex bg-white justify-evenly text-center px-[12rem]">
        {allCategoryData?.allCategory?.map((category) => {
          const subcategories =
            category.fashionData ||
            category.electronicsData ||
            category["home&furnitureData"] ||
            category["beauty&toysData"] ||
            category.wheelarsData ||
            [];
          return (
            <div
              className="my-7 relative"
              key={category.id}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div>
                <img src={category.image} />
              </div>
              <p className="font-semibold flex ">
                {category.name}
                {categoryWithDropdown.includes(category) && (
                  <FaChevronDown className="text-[0.8rem] mx-2 mt-1.5 transaction-transform hover:rotate-180 duration-300" />
                )}
              </p>
              {hoveredCategory === category.id && subcategories.length > 0 && (
                <div className="absolute left-[-10rem]  w-[15rem] bg-white text-black border rounded-lg shadow-lg text-left pl-2 z-10">
                  {subcategories.map((item) => (
                    <p key={item.id} className="text-sm py-3">
                      {item.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Category;
