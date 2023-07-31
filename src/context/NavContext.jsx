/* eslint-disable react/prop-types */
import { createContext } from 'react'
import { useState } from "react"

export const NavContext = createContext();

function NavProvider({ children }) {
    const [activeLinkId, setActiveLinkId] = useState("");

    const providerValue = {
        activeLinkId,
        setActiveLinkId,
    }

  return (
    <NavContext.Provider value={providerValue}>
        {children}
    </NavContext.Provider>
  )
}

export default NavProvider