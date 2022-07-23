import { actionTypes } from "./action";

export const initState = {
  isLoggedIn: false,
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  token: "",
};

function reducer(state = initState, action:any) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      // console.log(action)
      return {
        ...state,
        ...{ isLoggedIn: true },
        ...{ id: action.user.id ? action.user.id : action.user._id },
        ...{ firstname: action.user.firstname },
        ...{ lastname: action.user.lastname ? action.user.lastname : "" },
        ...{ username: action.user.username },
        ...{ email: action.user.email },
        ...{ token: action.user.token },
      };
    case actionTypes.LOGOUT_SUCCESS:
      // console.log(action)
      return {
        ...state,
        ...{ isLoggedIn: false },
        ...{ id: "" },
        ...{ firstname: "" },
        ...{ lastname: "" },
        ...{ username: "" },
        ...{ token: "" },
      };
    default:
      return state;
  }
}

export default reducer;
