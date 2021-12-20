import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Routes from "./components/Routes";
import "./main.scss";

function App() {
  return (
    <Router>
      <div className="web-container">
        <Nav />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
