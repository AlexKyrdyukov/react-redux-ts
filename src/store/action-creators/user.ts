// import { UserAction, UserActionTypes } from "./../../types/todo";
import { Dispatch } from "redux";
import { UserActions, UserActionTypes } from "../../types/user";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 2000);
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: " have error from loading users",
      });
    }
  };
};
