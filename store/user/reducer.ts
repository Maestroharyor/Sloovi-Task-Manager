import { StatNumber } from "@chakra-ui/react";
import { userData } from "../../data/dataTypes";
import { actionTypes } from "./action";

export const initState:userData = {
        last: "",
        company_id: "",
        created: "",
        icon: "",
        is_creator: 0,
        is_delete: 0,
        is_archived: 0,
        phone: "",
        user_id: "",
        is_shared: 0,
        name: "",
        currency: "",
        company: "",
        id: "",
        first: "",
        email: "",
        status: 0,
        user_status: "",
        role_id: "",
        role_name: ""
};

function reducer(state = initState, action:any) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      // console.log(action)
      return {
        ...state,
        ...action.user
      };
    case actionTypes.REMOVE_USER:
      // console.log(action)
      return state;
    default:
      return state;
  }
}

export default reducer;
