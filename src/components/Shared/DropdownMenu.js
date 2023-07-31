import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

import Link from "next/link";

import { Dropdown, Menu, Space } from "antd";

const categories = [
  { name: "CPU", value: "CPU" },
  { name: "Motherboard", value: "Motherboard" },
  { name: "RAM", value: "RAM" },
  { name: "Power Supply", value: "Power Supply" },
  { name: "Storage", value: "Storage" },
  { name: "Monitor", value: "Monitor" },
  { name: "Others", value: "Others" },
];

export const menu = (
  <Menu className="bg-white">
    {categories.map((category) => (
      <Menu.Item
        key={category.name}
        className="hover:bg-gray-300 duration-200 "
      >
        <Link href={`/categories/${category.value}`}>
          <p className="text-black  px-4 py-2  ">{category.name}</p>
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);
