import { Layout, Menu, Button, Dropdown, Icon } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();

  const categories = [
    { name: "CPU", value: "CPU" },
    { name: "Motherboard", value: "Motherboard" },
    { name: "RAM", value: "RAM" },
    { name: "Power Supply", value: "Power Supply" },
    { name: "Storage", value: "Storage" },
    { name: "Monitor", value: "Monitor" },
    { name: "Others", value: "Others" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const menu = (
    <Menu>
      {categories.map((category) => (
        <Menu.Item key={category.name}>
          <Link href={`/categories/${category.value}`}>
            <p className="text-black hover:text-white hover:bg-gray-800 block px-4 py-2 transition-all">
              {category.name}
            </p>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Header className="flex justify-between">
      <div className="flex items-center gap-6">
        <div className="demo-logo">
          <Link className="text-white text-[25px]" href="/">
            PCBuilders
          </Link>
        </div>

        <Menu theme="dark" mode="horizontal">
          <Link href="/products" className="text-xl text-white">
            Products
          </Link>
        </Menu>

        <div>
          <Dropdown
            overlay={menu}
            onOpenChange={toggleDropdown}
            open={isDropdownOpen}
          >
            <h3
              className={`${
                isDropdownOpen ? "bg-gray-700" : ""
              } text-white ant-dropdown-link`}
              onClick={(e) => e.preventDefault()}
            >
              Category <DownOutlined className="text-xs" />
            </h3>
          </Dropdown>
        </div>
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        className="w-[20%] flex text-xl justify-between items-center"
      >
        {session?.user ? (
          <items className="flex items-center gap-3">
            <Button type="primary" danger onClick={() => signOut()}>
              Logout
            </Button>
            <Link href="/pcBuilder" className="text-white">
              <Button type="primary">PC Builder</Button>
            </Link>
          </items>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
