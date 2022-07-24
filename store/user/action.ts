import { userData } from "../../data/dataTypes";

export const actionTypes = {
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
};

export function addUser(user:userData) {
  return { type: actionTypes.ADD_USER, user: user };
}

export function removeUser() {
  return { type: actionTypes.REMOVE_USER };
}

