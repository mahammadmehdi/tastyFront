import React, { useContext } from 'react'
import { WishlistContext } from '../../context/wishlistContext'
import "./index.scss"
import { Helmet } from 'react-helmet-async'

function Wishlist() {
    const {isWishlist,addWishlist,wishlist} = useContext(WishlistContext)
  return (
    <div className='wishlistPage'>
        <Helmet>
            <title>Wishlist</title>
        </Helmet>
        <div className="cards">
            {wishlist.map((x)=><ul key={x._id} className="card">
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
              <td><i onClick={()=>addWishlist(x)} className={`fa-solid fa-heart ${isWishlist(x) ? "red" : "" }`}></i></td>
            </tr>
          </ul>)}
        </div>
    </div>
  )
}

export default Wishlist