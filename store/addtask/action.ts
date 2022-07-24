import { authData } from "../../data/dataTypes";

export const actionTypes = {
  SHOW_ADD_TASK: "SHOW_ADD_TASK",
  HIDE_ADD_TASK: "HIDE_ADD_TASK",

};

export function showTask() {
  return { type: actionTypes.SHOW_ADD_TASK };
}

export function hideTask() {
  return { type: actionTypes.HIDE_ADD_TASK };
}

