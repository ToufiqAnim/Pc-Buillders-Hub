import React from "react";
import { GrCloudComputer } from "react-icons/gr";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { TbHeartRateMonitor } from "react-icons/tb";
import { LiaCarBatterySolid } from "react-icons/lia";
import { MdOutlineSdStorage } from "react-icons/md";
import Link from "next/link";

const categories = [
  { name: "CPU", value: "CPU", icon: <BsCpu /> },
  { name: "Motherboard", value: "Motherboard", icon: <BsMotherboard /> },
  { name: "RAM", value: "RAM", icon: <GrCloudComputer /> },
  {
    name: "Power Supply",
    value: "Power-Supply-Unit",
    icon: <LiaCarBatterySolid />,
  },
  { name: "Storage", value: "Storage-Device", icon: <MdOutlineSdStorage /> },
  { name: "Monitor", value: "Monitor", icon: <TbHeartRateMonitor /> },
  { name: "Others", value: "Others", icon: <GrCloudComputer /> },
];

const iconMap = {
  BsCpu,
  BsMotherboard,
  GrCloudComputer,
  LiaCarBatterySolid,
  MdOutlineSdStorage,
  TbHeartRateMonitor,
};

export default function FeaturedCategory() {
  return (
    <div className="section_main text-center">
      <h1 className="section_title text-xl font-semibold mb-4 tracking-wider">
        Featured Category
      </h1>
      <p className="mb-3">Get Your Desired Product from Featured Category!</p>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {categories.map((category) => (
          <CategoryCard key={category.value} category={category} />
        ))}
      </div>
    </div>
  );
}

const CategoryCard = ({ category }) => {
  const IconComponent = iconMap[category.icon.type.name];

  return (
    <Link
      href={`/categories/${category.value}`}
      className="text-black  "
      style={{ textDecoration: "none" }}
    >
      <div className="cursor-pointer  p-4 flex flex-col items-center justify-center rounded-lg  hover:bg-gray-400 duration-300 hover:text-white shadow-xl  border-black">
        {IconComponent && (
          <IconComponent className="category-icon text-4xl mb-2 " />
        )}
        <h2 className="text-sm font-semibold">{category.name}</h2>
        {/* Other card content */}
      </div>
    </Link>
  );
};
