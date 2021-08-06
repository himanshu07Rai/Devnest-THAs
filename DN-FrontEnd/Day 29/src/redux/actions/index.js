import axios from "axios";
const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=669c1b1ce3ac452bafc83350210508&q=${place}&aqi=yes`
      );
      const data = res.data;
      dispatch({
        type: "UPDATE_PLACE_DATA",
        payload: data,
      });
      dispatch({
        type: "UPDATE_PLACE",
        payload: "",
      });
    };
    fetchData();
  };
};

const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};

export { updatePlace, updatePlaceData, toggleTheme };
