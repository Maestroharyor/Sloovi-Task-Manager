import { FormEvent, useState } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import moment from "moment";

// Components
import { FaEdit, FaPlus, FaTrashAlt, FaTasks } from "react-icons/fa";
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Tooltip,
  Button,
  useToast,
} from "@chakra-ui/react";
import { DatePicker, TimePicker } from "antd";
import type { DatePickerProps, TimePickerProps } from "antd";

// Data and Functions
import { addTaskData, authData, userData } from "../../data/dataTypes";
import { Capitalize, convertHMS } from "../../functions/utilities";
import { hideTask } from "../../store/addtask/action";

type Props = {
  user?: userData;
  auth?: authData;
};

const TaskInput = ({ user, auth }: Props) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [task_msg, setTaskMsg] = useState("");
  const [task_date, setTaskDate] = useState("");
  const [task_time, setTaskTime] = useState<number | null>(null);

  const addTask = (e: FormEvent) => {
    e.preventDefault();

    if (!task_msg) {
      toast({
        title: "Enter the task message",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }

    if (!task_date) {
      toast({
        title: "Select the task date",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
    if (task_time === null) {
      toast({
        title: "Select the task time",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }

    if (task_date && task_time !== null && task_msg && !loading) {
      setLoading(true);

      const body = {
        assigned_user: user?.id,
        task_date,
        task_time,
        is_completed: 0,
        time_zone: task_time,
        task_msg,
      };

      axios
        .post(
          `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${auth?.company_id}`,
          body
        )
        .then((response) => {
          setLoading(false);
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          toast({
            title: error.response.data.message,
            status: "error",
            isClosable: true,
            position: "top",
          });
        });
    }
  };

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setTaskDate(`${dateString}`);
  };

  const onTimeChange: TimePickerProps["onChange"] = (time, timeString) => {
    const timeInSeconds = convertHMS(`${timeString}`);

    setTaskTime(timeInSeconds);
  };
  return (
    <div className="flex flex-col border border-gray-300 mt-6 mb-5">
      {/* Task Header */}
      <div className="inline-flex justify-between items-center bg-gray-200 border border-gray-300 px-2 py-0">
        <p className="text-xl">Add New Task</p>
        <Tooltip hasArrow label="Add New Task" bg="black" color="white">
          <button className="border-l border-gray-300 h-full text-gray-600 py-3 pl-2">
            <FaPlus />
          </button>
        </Tooltip>
      </div>

      {/* Task Body */}

      <div className="bg-blue-50 py-3 px-2">
        <form className="flex flex-col gap-5" onSubmit={addTask}>
          <FormControl className="">
            <FormLabel>
              {" "}
              <p className="text-lg font-medium">Task Description</p>
            </FormLabel>
            <InputGroup>
              <Input
                placeholder=""
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
          <div className="flex justify-end items-center">
            <div className="flex gap-3 font-medium">
              <button
                onClick={() => {
                  dispatch(hideTask());
                }}
                type="button"
                className="inline-flex gap-2 items-center px-4 py-2 rounded bg-white border hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                Cancel
              </button>
              <Button
                //   mt={4}
                colorScheme="green"
                className="w-full"
                isLoading={loading}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<addTaskData, userData>(mapStateToProps)(TaskInput);
