import Link from "next/link";
import { connect, useDispatch } from "react-redux";

// Components
import { MdMenu } from "react-icons/md";
import { FaTachometerAlt, FaTasks } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

// Data and Functions
import { authData } from "../../data/dataTypes";

type Props = {
  auth?: authData;
};

const MobileHeader = ({ auth }: Props) => {
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
              {!auth?.isLoggedIn ? (
                <Link href={"/auth/login"}>
                  <a className="font-bold inline-block px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white transition duration-300 ease-in-out rounded text-xl w-full">
                    Login
                  </a>
                </Link>
              ) : (
                <Link href={"/auth/login"}>
                  <a className="font-bold inline-block px-3 py-2 bg-slate-500 hover:bg-slate-600 text-white hover:text-white transition duration-300 ease-in-out rounded text-xl inline-flex gap-2 items-center w-full">
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                  </a>
                </Link>
              )}
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<authData>(mapStateToProps)(MobileHeader);
