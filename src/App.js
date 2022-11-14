import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./view/Home";

import InputTag from "./components/InputTag";

function App() {
  return <div className="App">
    <Router>
      <Switch>
        <Route path="/input/tag" component={InputTag} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>;
}

export default App;
