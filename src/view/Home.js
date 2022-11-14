import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="components-title">Components</div>
      <div className="components-container">
        <div>Input</div>
        <Link to="/input/tag">Tag</Link>
      </div>
    </div>
  );
};

export default Home;
