import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "components/Form";
import Card from "components/Card";
import { useSelector } from "react-redux";
import ThemeToggle from "components/ThemeToggle";
const log = console.log;
function App() {
  const theme = useSelector((state) => state.theme);
  log(theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <ThemeToggle />
      <Form />
      <Card />
      {/* <div></div> */}
    </div>
  );
}

export default App;
