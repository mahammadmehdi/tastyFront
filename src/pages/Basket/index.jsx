import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import "./index.scss";
import { Helmet } from "react-helmet-async";

function Basket() {
  const { increase, decrease, removeBasket, basket } =
    useContext(BasketContext);
  return (
    <div className="basketPage">
         <Helmet>
            <title>Basket</title>
        </Helmet>
      <div className="cards">
        {basket.map((x) => (
          <ul key={x._id} className="card">
            <tr>
              <td>
                <img src={x.image} />
              </td>
              <td>
              
                <li>{x.name}</li>
              </td>
              <td>
              
                <li>{x.desc}</li>
              </td>
              <td>
                <li>${x.price}</li>
              </td>
              <td>
                <li onClick={() => increase(x)}>increase</li>
              </td>
              <td>
                <li>{x.count}</li>
              </td>
              <td>
                <li onClick={() => decrease(x)}>decrease</li>
              </td>
              <td>
               
                <li onClick={() => removeBasket(x)}>remove</li>
              </td>
            </tr>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Basket;
