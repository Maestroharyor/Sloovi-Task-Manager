import { useState } from "react";
import Image from "next/image";
import moment from "moment";

// Components
import { FaEdit, FaPlus, FaTrashAlt, FaTasks } from "react-icons/fa";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputRightElement,
  InputGroup,
  Tooltip,
} from "@chakra-ui/react";
import { DatePicker, TimePicker } from "antd";
import type { DatePickerProps, TimePickerProps } from "antd";

// Data and Functions
import { taskData } from "../../data/dataTypes";
import { Capitalize } from "../../functions/utilities";

type Props = {
  task: taskData;
  index: number;
};

const TaskComponent = ({ task, index }: Props) => {
  const [editTask, setEditTask] = useState(false);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="flex flex-col border border-gray-300">
      {/* Task Header */}
      <div className="inline-flex justify-between items-center bg-gray-200 border border-gray-300 px-2 py-0">
        <p className="text-xl">Task {index + 1}</p>
        <Tooltip hasArrow label="Add New Task" bg="black" color="white">
          <button className="border-l border-gray-300 h-full text-gray-600 py-3 pl-2">
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
                onClick={() => setEditTask(true)}
              >
                <FaEdit />
              </button>
            </Tooltip>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 py-3 px-2">
          <form className="flex flex-col gap-5">
            <FormControl className="">
              <FormLabel>
                {" "}
                <p className="text-lg font-medium">Task Description</p>
              </FormLabel>
              <InputGroup>
                <Input
                  placeholder=""
                  value={task.task_msg}
                  autoFocus
                  style={{ backgroundColor: "white" }}
                />
                <InputRightElement>
                  <FaTasks color="green.500" />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <div className="inline-flex justify-between items-center gap-4">
              <div className="flex-1">
                <p className="text-lg font-medium mb-2">Date</p>
                <DatePicker size="large" className="w-full" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium mb-2">Time</p>
                <TimePicker size="large" className="w-full" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Tooltip hasArrow label="Delete Task" bg="black" color="white">
                <button
                  className="text-2xl text-gray-500 hover:text-gray-700"
                  type="button"
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
                <button
                  type="submit"
                  className="inline-flex gap-2 items-center px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700 transition duration-300 ease-in-out"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskComponent;
