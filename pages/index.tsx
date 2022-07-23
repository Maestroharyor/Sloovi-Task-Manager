import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Welcome to Sloovi Task Manager">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pl-10 pr-14 py-20 h-full items-center mx-auto">
        <div className="col-span-7">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-[70px] md:leading-[100px]">
              Complete, Amazing <br />
              <span className="inline-block bg-blue-100 px-2">Task</span>{" "}
              Manager
            </h1>
            <p className="text-2xl mt-4">
              Built for small business owners, entrepreneurs, and freelancers.{" "}
              <br />
              No hidden fees, no hassle.
            </p>
          </div>

          <div>
            <Link href={"/auth/login"}>
              <a className="font-bold inline-block px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white  hover:text-white transition duration-300 ease-in-out rounded text-xl md:text-2xl">
                Login to Continue
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:col-span-5">
          <div className="custom-bounce bounce-7">
            <Image
              alt="Veegil banking savings"
              src="/svgs/tasks.svg"
              className="w-full"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
