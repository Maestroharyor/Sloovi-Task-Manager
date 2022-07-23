import type { NextPage } from "next";

// Components
import { FaTasks } from "react-icons/fa";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

const Login: NextPage = () => {
  return (
    <DefaultLayout title="Login to your Account">
      <div className="py-10">
        <div className="mx-auto max-w-[500px] bg-white rounded-lg shadow px-5 py-8 flex flex-col gap-7">
          <div className="text-center flex justify-center items-center flex-col gap-3">
            <FaTasks size={80} className="text-blue-500" />
            <h1 className="text-2xl font-bold">Login to continue</h1>
          </div>
          <form className="flex flex-col gap-5">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder="First name" type={"email"} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder="First name" type={"password"} />
            </FormControl>
            <Button
              //   mt={4}
              colorScheme="blue"
              className="w-full"
              //   isLoading={props.isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
