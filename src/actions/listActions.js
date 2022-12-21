// create action types
export const GET_LIST = "GET_LIST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILURE = "GET_LIST_FAILURE";

// create action creators that return an action
export const getList = () => ({
  type: GET_LIST,
});

export const getListSuccess = (list) => ({
  type: GET_LIST_SUCCESS,
  payload: list,
});

export const getListFailure = () => ({
  type: GET_LIST_FAILURE,
});
