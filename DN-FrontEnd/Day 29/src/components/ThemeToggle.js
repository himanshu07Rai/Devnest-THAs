import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "redux/actions";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="toggle-theme">
      <button
        onClick={() => dispatch(toggleTheme(theme))}
        className={theme ? "btn btn-light" : "btn btn-dark"}
      >
        {theme ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ThemeToggle;
