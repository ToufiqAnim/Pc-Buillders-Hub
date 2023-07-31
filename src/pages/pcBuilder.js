import Head from "next/head";
import React from "react";
import { MdComputer } from "react-icons/md";
import { GiComputerFan } from "react-icons/gi";
import { FaComputerMouse } from "react-icons/fa6";
import { PiComputerTowerLight } from "react-icons/pi";
import { GrCloudComputer } from "react-icons/gr";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { TbHeartRateMonitor } from "react-icons/tb";

import { MdOutlineSdStorage } from "react-icons/md";
/* import CategoryItem from "<test>/components/Reuseable/CategoryItem"; */
import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import CategoryCard from "@/components/UI/CategoryCard";
import { LiaCarBatterySolid } from "react-icons/lia";

const categories = [
  { name: "Processor", value: "CPU", icon: <BsCpu /> },
  { name: "Motherboard", value: "Motherboard", icon: <BsMotherboard /> },
  { name: "RAM", value: "RAM", icon: <GrCloudComputer /> },
  {
    name: "Power Supply",
    value: "Power Supply",
    icon: <LiaCarBatterySolid />,
  },
  { name: "Storage", value: "Storage-Device", icon: <MdOutlineSdStorage /> },
  { name: "Monitor", value: "Monitor", icon: <TbHeartRateMonitor /> },
  { name: "Ohters", value: "Others", icon: <GrCloudComputer /> },
];

export default function PCBuilder() {
  const router = useRouter();
  const { selectedComponents } = useSelector((state) => state.selectComponent);

  let totalPrice = 0;
  if (selectedComponents.length)
    totalPrice = selectedComponents.reduce(
      (prev, item) => prev + item.price,
      0
    );

  const onCompleteSubmit = () => {
    alert("Congratualtion! You have succesfully build your PC ");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>PC Build</title>
      </Head>
      <div className="min-h-[70vh] px-2">
        <h1 className="text-center text-2xl font-bold mb-5 mt-12">
          Build Your Dream PC 🖥️
        </h1>
        <div
          className="border-2 border-gray-500 md:w-3/4 mx-auto p-10"
          style={{
            border: "1px solid gray",
            borderRadius: 10,
          }}
        >
          <div
            className="flex justify-between items-center px-5 w-full h-24 shadow-xl"
            style={{
              border: "1px solid lightgray",
              borderRadius: 10,
            }}
          >
            <p className=" text-md">PC Builder - Build your own PC</p>
            <button className="flex flex-col items-center text-xl bg-[#f34538] text-white px-8 py-2 rounded-md border-0">
              <p className="font-semibold tracking-wider">Total Price: </p>
              <p className="font-semibold text-md"> {totalPrice} Tk</p>
            </button>
          </div>
          <div className="p-5">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
            <div className="mt-4 flex justify-between items-center">
              <p className="font-semibold text-xl">Total Price: </p>
              <p className="font-bold text-xl">$ {totalPrice}</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 mb-8">
          <button
            onClick={onCompleteSubmit}
            disabled={selectedComponents.length < 5}
            className="btn btn-info btn-wide"
          >
            Complete Build
          </button>
          {selectedComponents.length < 5 && (
            <p className="text-error text-sm">
              *Please select at least 6 items
            </p>
          )}
        </div>
      </div>
    </>
  );
}
