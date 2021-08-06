import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "redux/actions";
const Form = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input
            type="text"
            placeholder="eg.  Delhi"
            value={place}
            onChange={(e) => dispatch(updatePlace(e.target.value))}
          />
          <button
            onClick={(e) => {
              dispatch(updatePlaceData(place));
            }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
