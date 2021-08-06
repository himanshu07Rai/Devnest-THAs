import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState("");
  const [placeData, setPlaceData] = useState({});
  const [placeHolder, setPlaceHolder] = useState("eg. Delhi");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=669c1b1ce3ac452bafc83350210508&q=${location}&aqi=yes`
      );
      const data = res.data;
      setPlaceData(data);
    };
    fetchData();
  }, [location]);

  console.log(placeData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(place);
    setPlaceHolder("eg. " + place);
    setPlace("");
  };
  // console.log(location);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              placeholder={placeHolder}
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="offset-md-4 col-12 col-md-4">
          <div className="card">
            {placeData.location ? (
              <div>
                <img src={placeData.current.condition.icon} />
                <div className="temp">{placeData.current.temp_c}°</div>
                <div className="description">
                  {placeData.current.condition.text}
                </div>
                <div className="place">{placeData.location.name}</div>
                <div className="container">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind Now</div>
                      <div className="data">
                        {placeData.current.wind_kph}
                        <span className="unit">KM</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">
                        {placeData.current.humidity}
                        <span className="unit">%</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Precipitation</div>
                      <div className="data">
                        {placeData.current.precip_mm}
                        <span className="unit">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>Not Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
