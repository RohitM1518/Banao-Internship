import { createContext, useContext, useState } from "react";

const SignInOrUp = createContext()

export const useSignInOrUpContext =()=>{
    return useContext(SignInOrUp)
}

export const SignInOrUpProvider=({children})=>{
    const [signInOrUp, setSignInOrUp]=useState("")
    return(
        <SignInOrUp.Provider value={{signInOrUp, setSignInOrUp}}>
            {children}
        </SignInOrUp.Provider>
    )
}