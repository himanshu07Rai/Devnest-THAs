import "./App.css";
import Deaths from "./components/Deaths";
import QuotesContainer from "./components/QuotesContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Characters} />
          <Route path="/quotes" component={QuotesContainer} />
          <Route path="/deaths" component={Deaths} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
