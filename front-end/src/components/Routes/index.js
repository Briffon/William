import { Switch, Route, useLocation } from "react-router-dom";
import About from "../Pages/About";
import Calendar from "../Pages/Calendar";
import Contact from "../Pages/Contact";
import Day from "../Pages/Day";
import Landing from "../Pages/Landing";
import Philosophy from "../Pages/Philosophy";

function Routes() {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Calendar" component={Calendar} />
      <Route exact path="/Day" component={Day} />
      <Route exact path="/Philosophy" component={Philosophy} />
      <Route exact path="/Contact" component={Contact} />
    </Switch>
  );
}

export default Routes;
