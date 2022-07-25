import type { NextPage } from "next";
import { useLayoutEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";

// Components
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import TaskComponent from "../../components/Partials/TaskComponent";
import TaskSkeleton from "../../components/Partials/TaskSkeleton";
import { useToast } from "@chakra-ui/react";

// Data and Functions
import {
  addTaskData,
  authData,
  taskData,
  userData,
} from "../../data/dataTypes";
import { addUser } from "../../store/user/action";
import { Capitalize } from "../../functions/utilities";
import TaskInput from "../../components/Partials/TaskInput";

type Props = {
  auth: authData;
  user: userData;
  addtask: addTaskData;
};

const Dashboard = ({ auth, user, addtask }: Props) => {
  const toast = useToast();
  const dispatch = useDispatch();
  // const [users, setTasksLoading] = useState(false);
  const [tasksLoading, setTasksLoading] = useState(false);
  const [tasks, setTasks] = useState<taskData[]>([]);
  const [taskError, setTaskError] = useState("");

  const getUsers = async () => {
    axios
      .get(
        `https://stage.api.sloovi.com/team?product=outreach&company_id=${auth.company_id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.code === 200) {
          dispatch(addUser(response.data.results.data[0]));
        }
      })
      .catch((error) => {});
  };

  const getTasks = async () => {
    setTaskError("");
    if (!tasksLoading) {
      setTasksLoading(true);
      axios
        .get(
          `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${auth.company_id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then((response) => {
          setTasksLoading(false);

          if (response.data.code !== 200) {
            toast({
              title: response.data.message,
              status: "error",
              isClosable: true,
              position: "top",
            });
            setTaskError(response.data.message);
          } else {
            setTasks(response.data.results);
          }
        })
        .catch((error) => {
          setTasksLoading(false);
        });
    }
  };

  const refreshTasks = async () => {
    setTaskError("");
    if (!tasksLoading) {
      // setTasksLoading(true);
      axios
        .get(
          `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${auth.company_id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then((response) => {
          // setTasksLoading(false);

          if (response.data.code !== 200) {
            toast({
              title: response.data.message,
              status: "error",
              isClosable: true,
              position: "top",
            });
            setTaskError(response.data.message);
          } else {
            setTasks(response.data.results);
          }
        })
        .catch((error) => {});
    }
  };

  useLayoutEffect(() => {
    getTasks();
    getUsers();
  }, []);
  return (
    <DashboardLayout title="My Dashboard">
      <div className=" py-5 px-6 max-w-[600px] mx-auto">
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-3">
            Welcome {user.first ? Capitalize(user.first) : "User"}{" "}
          </h2>
          <p className="text-xl">
            Effectively create, edit and manage your tasks
          </p>
        </div>

        {taskError && (
          <p className="text-2xl text-red-500 text-center mb-3">{taskError}</p>
        )}

        {!tasksLoading && !tasks.length ? (
          <div className="border-l-4 border-blue-500 py-2 text-xl pl-3 bg-gray-100">
            <p>No Tasks Found. Add one now</p>
          </div>
        ) : null}

        {addtask.visible && !tasksLoading ? (
          <TaskInput refreshTasks={refreshTasks} />
        ) : null}

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
          {tasks.map((task, index) => (
            <TaskComponent
              key={task.id}
              task={task}
              index={index}
              refreshTasks={refreshTasks}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<authData, userData, addTaskData>(mapStateToProps)(
  Dashboard
);
