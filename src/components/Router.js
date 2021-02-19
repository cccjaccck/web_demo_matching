import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";

const AppRouter = ({}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route eact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
