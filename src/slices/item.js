import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  item: {},
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    getItem: (state) => {
      state.loading = true;
    },
    getItemSuccess: (state, { payload }) => {
      state.item = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getItemFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getItem, getItemSuccess, getItemFailure } = itemSlice.actions;
export const itemSelector = (state) => state.item;
export default itemSlice.reducer;

export function fetchItem(id) {
  return async (dispatch) => {
    dispatch(getItem());
    try {
      const response = await fetch(
        `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`
      );
      const data = await response.json();
      console.log("character", data);
      dispatch(getItemSuccess(data));
    } catch (error) {
      dispatch(getItemFailure());
    }
  };
}
