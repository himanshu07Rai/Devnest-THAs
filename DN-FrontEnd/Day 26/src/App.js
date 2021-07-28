import "./App.css";
import ComponentA from "./components/ComponentA";
import Form from "./components/Form";
function App() {
  console.log("App");
  return (
    <div className="App">
      <h1>Using Redux</h1>
      <Form />
      <ComponentA />
    </div>
  );
}

export default App;
