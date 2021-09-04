const initialState = {
  albums: [],
};

const albumReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === "GET_ALBUMS") {
    return {
      ...state,
      albums: payload,
    };
  }

  return state;
};

export default albumReducer;
