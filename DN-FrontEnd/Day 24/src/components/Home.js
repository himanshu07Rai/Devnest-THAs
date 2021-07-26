import { useAuth } from "../contexts/UserContext";
const Home = () => {
  const { loggedIn, login, logout, loading } = useAuth();
  const handleClick = () => {
    !loggedIn ? login() : logout();
  };
  return (
    <>
      <h1>Home - Public Route</h1>

      {loading ? (
        "loading..."
      ) : (
        <button onClick={handleClick}>{!loggedIn ? "Login" : "Logout"}</button>
      )}
    </>
  );
};

export default Home;
