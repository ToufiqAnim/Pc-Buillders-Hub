import { Layout, Menu, Button, Dropdown, Icon } from "antd";
const { Header } = Layout;
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";

import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <Header className="flex justify-between">
      <div className="flex items-center gap-6">
        <div className="demo-logo">
          <Link className="text-white text-[25px]" href="/">
            PCBuilders
          </Link>
        </div>

        <Menu theme="dark" mode="horizontal">
          <Link href="/products" className="text-xl text-white ">
            Products
          </Link>
        </Menu>
        <DropdownMenu />
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
