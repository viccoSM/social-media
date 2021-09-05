const initialState = {
  comments: [],
  form: {
    postId: "",
    name: "",
    email: "",
    body: "",
  },
};

const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === "GET_COMMENTS") {
    return {
      ...state,
      comments: payload,
    };
  }
  if (type === "ADD_COMMENT") {
    return {
      ...state,
      form: {
        ...state,
        [action.formType]: action.formValue,
      },
    };
  }

  return state;
};

export default commentsReducer;
