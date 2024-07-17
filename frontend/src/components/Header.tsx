import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navList">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <Link to="/scooters">Scooter Page</Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
