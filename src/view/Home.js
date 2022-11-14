import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="components-title">Components</div>
      <div className="components-container">
        <div className="components-heading">Inputs</div>
        <Link to="/input/tag">Tag</Link>
        <div className="components-heading">Misc</div>
        <Link to="misc/alert">Alert</Link>
      </div>
    </div>
  );
};

export default Home;
