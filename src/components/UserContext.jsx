import { createContext, useContext, useState } from "react";

const User = createContext()

export const useUserContext =()=>{
    return useContext(User)
}

export const UserContextProvider=({children})=>{
    const [user, setUser]=useState(null)
    return(
        <User.Provider value={{user, setUser}}>
            {children}
        </User.Provider>
    )
}