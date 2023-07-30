import Link from "next/link";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "antd";

const categories = [
  { name: "CPU", value: "CPU" },
  { name: "Motherboard", value: "Motherboard" },
  { name: "RAM", value: "RAM" },
  { name: "Power Supply", value: "Power-Supply-Unit" },
  { name: "Storage", value: "Storage-Device" },
  { name: "Monitor", value: "Monitor" },
  { name: "Others", value: "Others" },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="navbar bg-gray-800 p-2 flex">
      <div className="flex-1">
        <Link href="/">
          <p className="btn btn-ghost font-mono text-xl text-white">
            PC Builder
          </p>
        </Link>
      </div>
      <div className="flex">
        <ul className="menu menu-horizontal px-1">
          <li className="relative">
            <Button onClick={toggleDropdown} type="primary">
              Category
              <i
                className={`fas fa-caret-${
                  isDropdownOpen ? "up" : "down"
                } ml-1`}
              ></i>
            </Button>
            <ul
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } p-2 bg-gray-700 absolute top-8 left-0 z-10`}
            >
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={`/categories/${category.value}`}>
                    <p className="text-white hover:bg-gray-600 py-1 px-2 rounded">
                      {category.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <Link href="/pc-build">
          <p className="btn btn-primary">PC Build</p>
        </Link>
        {/* <div className='ml-2'>
            <button className='btn btn-warning'>Sign Out</button>
        </div> */}
      </div>
    </div>
  );
}
