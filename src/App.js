import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import Profile from "./components/Profile";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
