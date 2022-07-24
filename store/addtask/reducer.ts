import { addTaskData } from "../../data/dataTypes";
import { actionTypes } from "./action";

export const initState:addTaskData = {
  visible: false,
};

function reducer(state = initState, action:any) {
  switch (action.type) {
    case actionTypes.SHOW_ADD_TASK:
      // console.log(action)
      return {
        ...state,
        ...{ visible: true },
      };
    case actionTypes.HIDE_ADD_TASK:
      // console.log(action)
      return {
        ...state,
        ...{ visible: false },
       
      };
    default:
      return state;
  }
}

export default reducer;
