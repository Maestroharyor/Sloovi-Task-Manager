import { useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/router";

// Components
import { FaTasks, FaSignOutAlt } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";

// Data and Functions
import { authData, userData } from "../../data/dataTypes";
import { logOutSuccess } from "../../store/auth/action";
import { hideTask } from "../../store/addtask/action";

const sidebarLinks = [
  {
    title: "All Tasks",
    icon: <FaTasks />,
    link: "/dashboard",
  },
];

type Props = {
  auth?: authData;
  user?: userData;
};

const Sidebar = ({ auth, user }: Props) => {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    !auth?.isLoggedIn && router.push("/auth/login");
  }, []);

  const logout = () => {
    toast({
      title: "Loggin you out...",
      status: "info",
      isClosable: true,
      position: "top",
    });
    dispatch(hideTask());
    setTimeout(() => {
      dispatch(logOutSuccess());
      router.push("/");
    }, 1000);
  };
  return (
    <>
      <aside className="md:col-span-3 lg:col-span-2 bg-white h-full md:block pb-8 hidden rounded-r-2xl shadow relative">
        <div className="flex flex-col gap-5 sticky top-0">
          <div className="inline-flex justify-between items-center gap-2 bg-gray-900 text-white py-4 px-5">
            <div>
              <p className="text-lg font-medium mb-0.5 text-gray-100">
                {user?.name ? user.name : "Welcome"}
              </p>
              <p className="">{user?.role_name ? user.role_name : "Admin"}</p>
            </div>
            <Image
              alt=""
              src={user?.icon ? user?.icon : "/img/avatar.png"}
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="px-3">
            <Link href={"/"}>
              <a className="text-white bg-blue-500 hover:bg-blue-600 rounded-xl px-3 py-4 flex items-center justify-center transition duration-300 ease-in-out">
                <h1 className="inline-flex items-center  text-2xl font-bold gap-3 text-white">
                  <FaTasks />
                  <span>Sloovi</span>
                </h1>
              </a>
            </Link>
          </div>

          <div className=" flex flex-col gap-3 pt-4">
            {sidebarLinks.map((sidebar) => (
              <Link key={sidebar.title} href={sidebar.link}>
                <a
                  className={`text-gray-600 items-center flex gap-3 w-full px-8 hover:text-blue-600 hover:border-r-4 hover:border-blue-500  transition duration-300 ease-in-out py-2 ${
                    router.pathname === sidebar.link
                      ? "border-r-4 border-blue-500 text-blue-500 bg-gray-50"
                      : ""
                  }`}
                >
                  {" "}
                  <span>{sidebar.icon}</span> <span>{sidebar.title}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <button
          className="bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out hidden md:inline-flex items-center gap-3 fixed bottom-[20px] left-[20px] text-white px-5 py-2 rounded"
          onClick={logout}
        >
          <span>Log Out</span>
          <FaSignOutAlt />
        </button>
      </aside>
      <nav className="flex md:hidden px-5 py-2 justify-between items-center bg-white sticky top-0 z-[20]">
        <Link href={"/"}>
          <a className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
            <h1 className="inline-flex items-center  text-2xl font-bold gap-3">
              <FaTasks />
              <span>Veegil</span>
            </h1>
          </a>
        </Link>
        <Menu>
          <MenuButton className="">
            <MdMenu size={30} />
          </MenuButton>
          <MenuList>
            {sidebarLinks.map((sidebar) => (
              <MenuItem key={sidebar.title}>
                <Link href={sidebar.link}>
                  <a
                    className={`text-gray-600 items-center flex gap-3 w-full px-8 hover:text-blue-600 transition duration-300 ease-in-out py-2`}
                  >
                    {" "}
                    <span>{sidebar.icon}</span> <span>{sidebar.title}</span>
                  </a>
                </Link>
              </MenuItem>
            ))}
            <MenuItem>
              <button
                className="text-gray-600 items-center flex gap-3 w-full px-8 hover:text-red-600 transition duration-300 ease-in-out py-2 w-full"
                onClick={logout}
              >
                <FaSignOutAlt />
                <span>Log Out</span>
              </button>
            </MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<authData, userData>(mapStateToProps)(Sidebar);
