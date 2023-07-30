import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items = [
  /*


   */
  {
    key: "1",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/categories/processor"
      >
        Processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/motherboard">
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/ram">
        RAM
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/powerSupply">
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="storage">
        Storage
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="monitor">
        Monitor
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/others">
        Others
      </Link>
    ),
  },
];
const DropdownMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className="text-xl text-white">
        Categories
        <DownOutlined className="text-xs" />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownMenu;

/* import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";
const items = [
  {
    key: "1",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/processor">
        processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
const DropdownMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownMenu; */
