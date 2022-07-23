import { actionTypes } from "./action";

export const initState = {
  isLoggedIn: false,
  token: "",
  icon: "",
  company_id: "",
  user_id: "",
};

function reducer(state = initState, action:any) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      // console.log(action)
      return {
        ...state,
        ...{ isLoggedIn: true },
        ...{ token: action.user.token },
        ...{ icon: action.user.icon },
        ...{ company_id: action.user.company_id },
        ...{ user_id: action.user.user_id },
      };
    case actionTypes.LOGOUT_SUCCESS:
      // console.log(action)
      return {
        ...state,
                ...{ isLoggedIn: false },
        ...{ token: "" },
        ...{ icon: "" },
        ...{ company_id: "" },
        ...{ user_id: "" },
      };
    default:
      return state;
  }
}

export default reducer;
