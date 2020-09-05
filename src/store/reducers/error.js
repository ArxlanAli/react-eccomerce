const initalState = {
  error: "",
  severity: "",
};

const errorReducer = (state = initalState, action) => {
  const { error, severity } = action;

  if (error) {
    return {
      ...state,
      error,
      severity,
    };
  } else {
    return state;
  }
};

export default errorReducer;
