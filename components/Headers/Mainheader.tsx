import Link from "next/link";

// Components
import { FaTasks } from "react-icons/fa";

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <header className="hidden md:block sticky top-0 bg-white z-[20]">
      <nav className="flex px-5 py-2 justify-between items-center">
        <div className="flex gap-10 items-center">
          <Link href={"/"}>
            <a className="">
              <h1 className="inline-flex items-center  text-2xl font-bold gap-3 text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
                <FaTasks />
                <span>Sloovi</span>
              </h1>
            </a>
          </Link>

          <div className="inline-flex gap-5 items-center text-lg">
            <Link href={"/about"}>
              <a className="hover:text-blue-600 transition duration-300 ease-in-out">
                About This App
              </a>
            </Link>
          </div>
        </div>

        <div className="inline-flex gap-3">
          <Link href={"/auth/login"}>
            <a className="font-bold inline-block px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-white transition duration-300 ease-in-out rounded text-xl">
              Login
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
