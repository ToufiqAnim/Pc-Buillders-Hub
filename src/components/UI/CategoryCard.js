import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";

const CategoryCard = ({ category }) => {
  const { selectedComponents } = useSelector((state) => state.selectComponent);
  const selected = selectedComponents.find(
    (item) => item.category === category.value
  );

  return (
    <div key={category.name} className="flex items-center gap-5 mb-5">
      <div
        className="p-2 rounded  "
        style={{
          border: "1px solid lightgray",
        }}
      >
        <p className="text-4xl p-2">{category.icon}</p>
      </div>
      <div className="flex-grow ">
        <p className="text-md mb-2">{category.name}</p>
        {selected ? (
          <div className="text-sm flex flex-col gap-1">
            <span> {selected.productName}</span>
            <span className="font-semibold">{selected.price}Tk</span>
          </div>
        ) : (
          <span className="text-xs text-red-400">Not Selected</span>
        )}
      </div>
      <Link
        href={`/selectComponent/${category.value}`}
        className=" text-black "
        style={{ textDecoration: "none" }}
      >
        <button className=" text-white text-[16px] font-semibold px-4 py-3 bg-[#00235b] border-0 rounded-sm">
          {selected ? <ImCross /> : "Choose"}
        </button>
      </Link>
    </div>
  );
};
export default CategoryCard;
