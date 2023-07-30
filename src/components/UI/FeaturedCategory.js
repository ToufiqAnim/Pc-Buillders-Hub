import React from "react";
import { GrCloudComputer } from "react-icons/gr";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaCarBattery } from "react-icons/fa6";
import { MdOutlineSdStorage } from "react-icons/md";
import Link from "next/link";

const categories = [
  { name: "CPU", value: "CPU", icon: <BsCpu /> },
  { name: "Motherboard", value: "Motherboard", icon: <BsMotherboard /> },
  { name: "RAM", value: "RAM", icon: <GrCloudComputer /> },
  { name: "Power Supply", value: "Power-Supply-Unit", icon: <FaCarBattery /> },
  { name: "Storage", value: "Storage-Device", icon: <MdOutlineSdStorage /> },
  { name: "Monitor", value: "Monitor", icon: <TbHeartRateMonitor /> },
  { name: "Others", value: "Others", icon: <GrCloudComputer /> },
];

const iconMap = {
  BsCpu,
  BsMotherboard,
  GrCloudComputer,
  FaCarBattery,
  MdOutlineSdStorage,
  TbHeartRateMonitor,
};

export default function FeaturedCategory() {
  return (
    <div className="section_main">
      <h1 className="section_title text-3xl font-semibold mb-6">
        Featured Category
      </h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 hover:bg-gray-100 transform transition-all ">
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
      className="text-gray-600  "
      style={{ textDecoration: "none" }}
    >
      <div className="cursor-pointer border p-4 flex flex-col items-center justify-center rounded-lg  hover:bg-gray-400 duration-300 hover:text-white">
        {IconComponent && (
          <IconComponent className="category-icon text-4xl mb-2" />
        )}
        <h2 className="text-xl font-semibold">{category.name}</h2>
        {/* Other card content */}
      </div>
    </Link>
  );
};
