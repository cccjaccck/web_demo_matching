import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../routes/Login";
import Signup from "../routes/Signup";
import Home from "../routes/Home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route eact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
