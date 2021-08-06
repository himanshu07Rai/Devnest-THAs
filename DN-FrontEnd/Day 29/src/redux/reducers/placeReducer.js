const placeReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "UPDATE_PLACE":
      return payload;
    default:
      return state;
  }
};

export default placeReducer;
