import dynamic from "next/dynamic";
const MainHeader = dynamic(() => import("../Headers/Mainheader"));

const MobileHeader = dynamic(() => import("../Headers/Mobileheader"));

import Metadata from "../Headers/Partials/Metadata";

type Props = {
  title?: string;
  desc?: string;
  children: JSX.Element;
};

const DefaultLayout = (props: Props) => {
  return (
    <>
      <Metadata title={props.title} metadescription={props.desc} />
      <MainHeader />
      <MobileHeader />
      <div className="min-h-[calc(100vh-62px)] bg-gray-100 ">
        {props.children}
      </div>
    </>
  );
};

export default DefaultLayout;
