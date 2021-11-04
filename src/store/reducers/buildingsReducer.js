// Cada reducer tiene su propio State.

const initialState = {
  buildings: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
