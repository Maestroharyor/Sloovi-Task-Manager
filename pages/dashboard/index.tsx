import type { NextPage } from "next";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

// Components
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import TaskComponent from "../../components/Partials/TaskComponent";
import TaskSkeleton from "../../components/Partials/TaskSkeleton";

// Data and Functions
import { tasklists } from "../../data/data";
import { taskData } from "../../data/dataTypes";

const Dashboard: NextPage = () => {
  const [tasksLoading, setTasksLoading] = useState(false);
  const [tasks, setTasks] = useState<taskData[]>([]);
  return (
    <DashboardLayout title="My Dashboard">
      <div className=" py-5 px-6 max-w-[600px] mx-auto">
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-3">Welcome User </h2>
          <p className="text-xl">
            Effectively create, edit and manage your tasks
          </p>
        </div>

        {tasksLoading && (
          <div className="flex flex-col gap-7 mb-7">
            <TaskSkeleton />
            <TaskSkeleton />
            <TaskSkeleton />
            <TaskSkeleton />
            <TaskSkeleton />
          </div>
        )}

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
