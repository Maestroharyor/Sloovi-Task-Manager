import type { NextPage } from "next";
import Link from "next/link";

// Components
import { FaWallet, FaPlus } from "react-icons/fa";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import TaskComponent from "../../components/Partials/TaskComponent";

// Data and Functions
import { tasklists } from "../../data/data";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout title="My Dashboard">
      <div className=" py-5 px-6 max-w-[600px] mx-auto">
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-3">Welcome User </h2>
          <p className="text-xl">
            Effectively create, edit and manage your tasks
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {tasklists.map((task, index) => (
            <TaskComponent key={task.id} task={task} index={index} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
