import { useAuth } from "../contexts/UserContext";
import { Redirect } from "react-router-dom";
const Dashboard = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) return <Redirect to="/" />;
  return <h1>Dashboard - Private Route</h1>;
};

export default Dashboard;
