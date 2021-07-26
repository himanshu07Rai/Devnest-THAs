import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
      <Link className="link" to="/dashboard">
        Dashboard
      </Link>
    </div>
  );
};

export default Nav;
