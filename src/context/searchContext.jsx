import React, { createContext, useState } from 'react'

export const SeacrhContext = createContext()
function SearchProvider({children}) {
    const [seacrh, setSeacrh] = useState('')

    function handleSearch(e) {
        setSeacrh(e.target.value)
    }
  return (
    <SeacrhContext.Provider value={{handleSearch,seacrh}}>{children}</SeacrhContext.Provider>
  )
}

export default SearchProvider