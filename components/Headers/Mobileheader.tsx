import Link from "next/link";

// Components
import { MdMenu } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

type Props = {};

const MobileHeader = (props: Props) => {
  return (
    <header className="block md:hidden  sticky top-0 bg-white z-[20]">
      <nav className="flex px-5 py-2 justify-between items-center">
        <Link href={"/"}>
          <a className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
            <h1 className="inline-flex items-center  text-2xl font-bold gap-3">
              <FaTasks />
              <span>Sloovi</span>
            </h1>
          </a>
        </Link>
        <Menu>
          <MenuButton className="">
            <MdMenu size={30} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href={"/auth/login"}>
                <a className="font-bold inline-block px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white transition duration-300 ease-in-out rounded w-full">
                  Login
                </a>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
};

export default MobileHeader;
