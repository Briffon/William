import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Routes from "./components/Routes";
import "./main.scss";

function App() {
  return (
    <Router>
      <div className="web-container">
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
