import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "../../components/Slider";
import "./index.scss"

function Navbar() {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="left">Tasty</div>
        <div className="right">
          <ul className="pages">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/addpages"}>Add Pages</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/basket"}>Basket</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
            <li><NavLink>Blog</NavLink></li>
            <li><NavLink>Menu</NavLink></li>
          </ul>
          <div className="bars"><i class="fa-solid fa-bars"></i></div>
        </div>
      </div>
      <Slider></Slider>
    </div>
  );
}

export default Navbar;
