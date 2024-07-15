import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* <img className="logo" src={logo} alt="img" /> */}
      <nav>
        <ul className="navList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <hr />
          <li>
            <Link to="/search">Search</Link>
          </li>
          <hr />
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
