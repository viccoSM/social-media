const initialStateUser = {
  users: [],
};

const userReducer = (state = initialStateUser, action) => {
  const { type, payload } = action;

  if (type === "GET_USERS") {
    return {
      ...state,
      users: payload,
    };
  }

  return state;
};

export default userReducer;
