const initialState = "";

const func = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_PASSWORD":
      return payload;

    default:
      return state;
  }
};

export default func;
