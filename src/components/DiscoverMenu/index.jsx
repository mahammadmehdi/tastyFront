import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function DiscoverMenu() {
  const [menu, setMenu] = useState([]);
  const {addBasket} = useContext(BasketContext)
  const {addWishlist,isWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div className="discoverMenu">
      <div className="discoverMenuAll">
        <div className="name">OUR MENU</div>
        <div className="head">Discover Our Exclusive Menu</div>
        <div className="menu">
          <div className="main">
            <i className="fa-solid fa-bacon"></i>
            <span>Main</span>
          </div>
          <div className="desert">
            <i class="fa-solid fa-cookie"></i>
            <span>Dessert</span>
          </div>
          <div className="drinks">
            <i class="fa-solid fa-martini-glass-citrus"></i>
            <span>Drinks</span>
          </div>
        </div>
        <div className="cards">
          {menu.map((x) => (
            <ul key={x._id} className="pages">
              <li className="image">
                <img src={x.image} />
              </li>
              <div className="nameDesc">
                <li className="name">{x.name}</li>
                <li className="desc">{x.desc}</li>
              </div>
              <li className="price">${x.price}</li>
              <li onClick={()=>addBasket(x)}><i className="fa-solid fa-basket-shopping"></i></li>
              <li onClick={()=>addWishlist(x)}><i  className={`fa-solid fa-heart ${isWishlist(x) ? "red" : "" }`}></i></li>
              <li><NavLink to={"/detail/"+x._id}><i className="fa-solid fa-eye"></i></NavLink></li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiscoverMenu;
