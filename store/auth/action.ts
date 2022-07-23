import { authData } from "../../data/dataTypes";

export const actionTypes = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  REGISTERED_SUCCESS: "REGISTERED_SUCCESS",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
};

export function loginSuccess(user:authData) {
  return { type: actionTypes.LOGIN_SUCCESS, user: user };
}

export function logOutSuccess() {
  return { type: actionTypes.LOGOUT_SUCCESS };
}

