import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  list: [],
};

// slice for list
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getList: (state) => {
      state.loading = true;
    },
    getListSuccess: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getListFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// actions generated from the slice
export const { getList, getListSuccess, getListFailure } = listSlice.actions;

// a selector
export const listSelector = (state) => state.list;

// the reducer
export default listSlice.reducer;

// asynchronous action
export function fetchData() {
  console.log("fetch0");
  return async (dispatch) => {
    console.log("fetch");
    dispatch(getList());
    try {
      const response = await fetch("oompa-loompas.json");
      const data = await response.json();
      console.log("response", response, data);
      dispatch(getListSuccess(data));
    } catch (error) {
      dispatch(getListFailure());
    }
  };
}
