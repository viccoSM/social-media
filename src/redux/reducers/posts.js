const initialState = {
  isPost: false,
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === "GET_POSTS") {
    return {
      ...state,
      isPost: payload,
      posts: payload,
    };
  }

  return state;
};

export default postsReducer;
