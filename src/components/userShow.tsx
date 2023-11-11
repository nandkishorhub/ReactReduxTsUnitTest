import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  fetchUser,
  selectUserFetchStatus,
  selectUserName,
} from "../features/userSlice";

const UserDisplay = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const userFetchStatus = useAppSelector(selectUserFetchStatus);
  console.log("username", userName);
  return (
    <div>
      {/* Display the current user name */}
      <div>{userName}</div>
      {/* On button click, dispatch a thunk action to fetch a user */}
      <button onClick={() => dispatch(fetchUser())}>Fetch user</button>
      {/* At any point if we're fetching a user, display that on the UI */}
      {userFetchStatus === "loading" && <div>Fetching user...</div>}
    </div>
  );
};

export default UserDisplay;
