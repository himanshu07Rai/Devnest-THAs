import { changePassword, changeUserName } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const password = useSelector((state) => state.password);
  console.log("Form");
  return (
    <div>
      <input
        type="text"
        placeholder="User name"
        value={user}
        onChange={(e) => {
          dispatch(changeUserName(e.target.value));
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          dispatch(changePassword(e.target.value));
        }}
      />
    </div>
  );
};

export default Form;
