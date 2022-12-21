export const initialState = {
  list: [],
  loading: false,
  hasErrors: false,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
