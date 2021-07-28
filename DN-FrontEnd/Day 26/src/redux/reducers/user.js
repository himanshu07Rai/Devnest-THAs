const initialState = "";

const func = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_USERNAME":
      return payload;

    default:
      return state;
  }
};

export default func;
