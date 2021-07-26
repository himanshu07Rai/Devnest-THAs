import { useAuth } from "../contexts/UserContext";
import { Redirect } from "react-router-dom";
const Profile = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) return <Redirect to="/" />;

  return <h1>Profile - Private Route</h1>;
};

export default Profile;
