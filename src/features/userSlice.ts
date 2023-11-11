import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 
import { RootState } from "./store";
 

interface UserState {
  name: string;
  status: "idle" | "loading" | "complete";
}

const initialState: UserState = {
  name: "No user",
  status: "idle",
};

// Here I am just trying out unit testing for Redux with MSW so below is the random omdb api where we get movies details
// so instead of username I am showing totalResults count which is coming from this api 
// i din't want spend time on api creation so i used this my api

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  // here while tesing I am not able to get any data from my test mocking msw response 
  const response = await fetch(
    "https://www.omdbapi.com/?apiKey=4428c013&s=Harry&type=movie"
  );
  return response.json();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
      console.log("pending ", state.name);
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "complete";
      // here yes you can see name but forget about naming here I am assigning 
      // totalResults(it is number with string type) to name and displaying same on UI
      // my motive here is to test API with Redux and MSW using TS unit testing
      state.name = action.payload["totalResults"];
      console.log("state ", action.payload);
    });
  },
});

export const selectUserName = (state: RootState) => state.user.name;
export const selectUserFetchStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
