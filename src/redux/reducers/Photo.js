const initialState = {
  photos: [],
};

const photosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === "GET_PHOTOS") {
    return {
      ...state,
      photos: payload,
    };
  }

  return state;
};

export default photosReducer;
