import { FormEvent, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Image from "next/image";
import moment from "moment";
import axios from "axios";

// Components
import { FaEdit, FaPlus, FaTrashAlt, FaTasks } from "react-icons/fa";
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Tooltip,
  useToast,
  Button,
} from "@chakra-ui/react";
import { DatePicker, TimePicker } from "antd";
import type { DatePickerProps, TimePickerProps } from "antd";

// Data and Functions
import {
  taskData,
  addTaskData,
  authData,
  userData,
} from "../../data/dataTypes";
import { Capitalize, convertHMS } from "../../functions/utilities";
import { hideTask, showTask } from "../../store/addtask/action";

type Props = {
  task: taskData;
  index: number;
  user?: userData;
  auth?: authData;
  addtask?: addTaskData;
  refreshTasks: () => void;
};

const TaskComponent = ({
  task,
  index,
  user,
  auth,
  addtask,
  refreshTasks,
}: Props) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [editTask, setEditTask] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [task_msg, setTaskMsg] = useState(task.task_msg);
  const [task_date, setTaskDate] = useState(() => {
    return task.task_date;
  });
  const [task_time, setTaskTime] = useState<number | null>(() => {
    return task.task_time;
  });

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setTaskDate(`${dateString}`);
  };

  const onTimeChange: TimePickerProps["onChange"] = (time, timeString) => {
    const timeInSeconds = convertHMS(`${timeString}`);

    setTaskTime(timeInSeconds);
  };

  // Function to update task
  const updateTask = (e: FormEvent) => {
    e.preventDefault();
    setUpdateLoading(true);

    const body = {
      assigned_user: user?.id,
      task_date,
      task_time,
      is_completed: 0,
      time_zone: task_time,
      task_msg,
    };

    axios
      .put(
        `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task.id}?company_id=${auth?.company_id}`,
        JSON.stringify(body),
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setUpdateLoading(false);
        if (
          response.data.code === 200 ||
          response.data.code === 201 ||
          response.data.code === 202
        ) {
          toast({
            title: response.data.message,
            status: "success",
            isClosable: true,
            position: "top",
          });
          refreshTasks();
          setEditTask(false);
        }
      })
      .catch((error) => {
        setUpdateLoading(false);
        toast({
          title: error.response.data.message,
          status: "error",
          isClosable: true,
          position: "top",
        });
      });
  };

  // Function to delete a task

  const deleteTask = async () => {
    const answer = confirm("Do you want to delete this task?");

    if (answer) {
      toast({
        title: "Deleting task...",
        status: "loading",
        isClosable: true,
        position: "top",
        duration: 2,
      });
      axios
        .delete(
          `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task.id}?company_id=${auth?.company_id}`,
          {
            headers: {
              Authorization: `Bearer ${auth?.token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (
            response.data.code === 200 ||
            response.data.code === 201 ||
            response.data.code === 202 ||
            response.data.code === 204
          ) {
            toast({
              title: response.data.message,
              status: "success",
              isClosable: true,
              position: "top",
            });
            refreshTasks();
            setEditTask(false);
          }
        })
        .catch((error) => {
          setUpdateLoading(false);
          toast({
            title: error.response.data.message,
            status: "error",
            isClosable: true,
            position: "top",
          });
        });
    }
  };

  return (
    <div className="flex flex-col border border-gray-300">
      {/* Task Header */}
      <div className="inline-flex justify-between items-center bg-gray-200 border border-gray-300 px-2 py-0">
        <p className="text-xl">Task {index + 1}</p>
        <Tooltip hasArrow label="Add New Task" bg="black" color="white">
          <button
            className="border-l border-gray-300 h-full text-gray-600 py-3 pl-2"
            onClick={() => {
              dispatch(showTask());
              setEditTask(false);
            }}
          >
            <FaPlus />
          </button>
        </Tooltip>
      </div>

      {/* Task Body */}
      {!editTask ? (
        <div className="inline-flex justify-between items-center bg-white py-3 px-2">
          <div className="inline-flex justify-between items-center gap-2">
            <Image
              alt=""
              src={"/img/avatar.png"}
              width={50}
              height={50}
              className="rounded"
            />
            <div>
              <p className="text-lg font-medium mb-1">
                {Capitalize(task.task_msg)}
              </p>
              <p>{moment(task.task_date).format("ddd, MMM D YYYY")}</p>
            </div>
          </div>

          <div>
            <Tooltip hasArrow label="Edit Task" bg="black" color="white">
              <button
                className="text-gray-600 text-2xl"
                onClick={() => {
                  dispatch(hideTask());
                  setEditTask(true);
                }}
              >
                <FaEdit />
              </button>
            </Tooltip>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 py-3 px-2">
          <form className="flex flex-col gap-5" onSubmit={updateTask}>
            <FormControl className="">
              <FormLabel>
                {" "}
                <p className="text-lg font-medium">Task Description</p>
              </FormLabel>
              <InputGroup>
                <Input
                  placeholder=""
                  defaultValue={task.task_msg}
                  autoFocus
                  style={{ backgroundColor: "white" }}
                  onChange={(e) => setTaskMsg(e.target.value)}
                />
                <InputRightElement>
                  <FaTasks color="green.500" />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <div className="inline-flex justify-between items-center gap-4">
              <div className="flex-1">
                <p className="text-lg font-medium mb-2">Date</p>
                <DatePicker
                  size="large"
                  className="w-full"
                  onChange={onDateChange}
                />
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium mb-2">Time</p>
                <TimePicker
                  size="large"
                  className="w-full"
                  onChange={onTimeChange}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Tooltip hasArrow label="Delete Task" bg="black" color="white">
                <button
                  className="text-2xl text-gray-500 hover:text-gray-700"
                  type="button"
                  onClick={deleteTask}
                >
                  <FaTrashAlt />
                </button>
              </Tooltip>

              <div className="flex gap-3 font-medium">
                <button
                  onClick={() => setEditTask(false)}
                  type="button"
                  className="inline-flex gap-2 items-center px-4 py-2 rounded bg-white border hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  Cancel
                </button>
                <Button
                  //   mt={4}
                  colorScheme="green"
                  className="w-full"
                  isLoading={updateLoading}
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<addTaskData, userData>(mapStateToProps)(TaskComponent);
