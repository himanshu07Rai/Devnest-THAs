import "./App.css";
import CounterContextProvider from "./contexts/UserContext";

import Routes from "./Routes";
function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <Routes />
      </div>
    </CounterContextProvider>
  );
}

export default App;
