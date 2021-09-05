const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === "GET_POSTS") {
    return {
      ...state,
      posts: payload,
    };
  }

  return state;
};

export default postsReducer;
