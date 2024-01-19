import React, { useEffect, useState } from 'react'
import "./index.scss"
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Detail() {

    const {id} = useParams()

    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/" +id)
        .then((res) => res.json())
        .then((data) => setDetail(data));
    }, [])
    
  return (
    <div className='detailPage'>
         <Helmet>
            <title>Detail</title>
        </Helmet>
        <div className="cards">
            <div className='card'>
            <tr>
              <td>
                <img src={detail.image} />
              </td>
              <td>
              
                <li>{detail.name}</li>
              </td>
              <td>
              
                <li>{detail.desc}</li>
              </td>
              <td>
                <li>${detail.price}</li>
              </td>
            </tr>
            </div>
        </div>
    </div>
  )
}

export default Detail