import * as actions from "../actions/listActions";

export const initialState = {
  list: [],
  loading: false,
  hasErrors: false,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_LIST:
      return { ...state, loading: true };
    case actions.GET_LIST_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false };
    case actions.GET_LIST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
