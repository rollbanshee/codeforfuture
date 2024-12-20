import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Haqqında</Link>
        </li>
        <li>
          <Link to="/projects">İş Nümunələri</Link>
        </li>
        <li>
          <Link to="/contact">Əlaqə Məlumatları</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
