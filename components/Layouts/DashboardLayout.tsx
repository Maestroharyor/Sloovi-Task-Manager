import { connect, useDispatch } from "react-redux";

// Components
import { Tooltip } from "@chakra-ui/react";
import Metadata from "../Headers/Partials/Metadata";
import Sidebar from "../Partials/Sidebar";
import { FaPlus } from "react-icons/fa";

// Data and Functions
import { addTaskData } from "../../data/dataTypes";
import { showTask } from "../../store/addtask/action";

type Props = {
  title?: string;
  desc?: string;
  addtask?: addTaskData;
  children: JSX.Element;
};

const DefaultLayout = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Metadata title={props.title} metadescription={props.desc} />
      <div className="min-h-[100vh] bg-gray-50 md:grid md:grid-cols-12 ">
        <Sidebar />
        <main className="md:col-span-9 lg:col-span-10 h-full p-5">
          {props.children}
        </main>

        {!props.addtask?.visible ? (
          <Tooltip hasArrow label="Add New Task" bg="gray.300" color="black">
            <button
              className="fixed bottom-[40px] right-[40px] shadow-lg rounded-full h-[50px] w-[50px] flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-white animate-bounce border border-white border-2"
              onClick={() => {
                dispatch(showTask());
              }}
            >
              <FaPlus />
            </button>
          </Tooltip>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<addTaskData>(mapStateToProps)(DefaultLayout);
