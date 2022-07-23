import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { connect, useDispatch } from "react-redux";
import axios from "axios";

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
  useToast,
} from "@chakra-ui/react";

// Data and functions
import { loginSuccess } from "../../store/auth/action";
import { authData } from "../../data/dataTypes";
import { Capitalize } from "../../functions/utilities";

const Login: NextPage = (props) => {
  // console.log(props);

  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = (e: FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    const body = {
      email,
      password,
    };

    setLoading(true);

    axios
      .post("https://stage.api.sloovi.com/login", body)
      .then((response) => {
        setLoading(false);

        if (response.data.code !== 200) {
          toast({
            title: response.data.message,
            status: "error",
            isClosable: true,
            position: "top",
          });
          if (response.data.results.length > 0) {
            response.data.results.map((result: any) => {
              if (result.key === "email") {
                setEmailError(Capitalize(result.msg));
              }
              if (result.key === "password") {
                setPasswordError(Capitalize(result.msg));
              }
            });
          } else {
            setEmailError(response.data.message);
            setPasswordError(response.data.message);
          }
        } else {
          toast({
            title: Capitalize(response.data.message),
            status: "success",
            isClosable: true,
            position: "top",
          });
          dispatch(loginSuccess(response.data.results));
          setTimeout(() => {
            toast({
              title: "Redirecting you to dashboard",
              status: "info",
              isClosable: true,
              position: "top",
            });
            router.push("/dashboard");
          }, 1000);
        }
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false);
      });
  };
  return (
    <DefaultLayout title="Login to your Account">
      <div className="py-10">
        <div className="mx-auto max-w-[500px] bg-white rounded-lg shadow px-5 py-8 flex flex-col gap-7">
          <div className="text-center flex justify-center items-center flex-col gap-3">
            <FaTasks size={80} className="text-blue-500" />
            <h1 className="text-2xl font-bold">Login to continue</h1>
          </div>
          <form className="flex flex-col gap-5" onSubmit={login}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Johndoe@example.com"
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-0.5">{emailError}</p>
              )}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder=""
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-0.5">{passwordError}</p>
              )}
            </FormControl>
            <Button
              //   mt={4}
              colorScheme="blue"
              className="w-full"
              isLoading={loading}
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

const mapStateToProps = (state: any) => {
  return state;
};

export default connect<authData>(mapStateToProps)(Login);
