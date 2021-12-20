import { Switch, Route, useLocation } from "react-router-dom";
import About from "../Pages/About";
import Landing from "../Pages/Landing";

function Routes() {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Landing} />
      <Route exact path="/About" component={About} />
    </Switch>
  );
}

export default Routes;
