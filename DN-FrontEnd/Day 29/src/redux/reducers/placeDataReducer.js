const placeDataReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "UPDATE_PLACE_DATA":
      return payload;
    default:
      return state;
  }
};

export default placeDataReducer;
