import React, { createContext, useState } from 'react'

export const BasketContext = createContext()
function BasketProvider({children}) {
    const [basket, setBasket] = useState([])

    function addBasket(item) {
        const index = basket.findIndex((x)=>x._id === item._id)
        if (index === -1) {
            setBasket([...basket,{...item, count:1}])
            return
        }
        basket[index].count++
        setBasket([...basket])
    }
    function increase(item) {
        const index = basket.findIndex((x)=>x._id === item._id)
        basket[index].count++
        setBasket([...basket])
    }
    function decrease(item) {
        const index = basket.findIndex((x)=>x._id === item._id)
        if (basket[index].count === 1) {
            return
        }
        basket[index].count--
        setBasket([...basket])
    }
    function removeBasket(item) {
        setBasket(basket.filter((x)=> x._id !== item._id))
    }
    const data = {
        addBasket,increase,decrease,removeBasket,basket
    }
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider