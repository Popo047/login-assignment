import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
