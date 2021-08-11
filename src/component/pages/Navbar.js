import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="row">
          <h3>IGNITECODER</h3>
        <div className="links">
          <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/movies">Movies</Link></li>
       <li> <Link className="link" to="/tv/series">Tv/series</Link></li>
        <li><Link className="link" to="/latest/movies">Latest</Link></li>
      </div>
        </div>
      </div>
    </div>
  );
}
