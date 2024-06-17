
// import './App.css'

import AllPosts from "./components/AllPosts"
import Header from "./components/Header"
import Hero from "./components/Hero"
import RightSide from "./components/RightSide"
import SignIn from "./components/SignIn"
import { useSignInOrUpContext } from "./components/SignInOrUpContext"
import SignUp from "./components/SignUp"
import Cancel from '../src/assets/cancel.png'
import { useUserContext } from "./components/UserContext"
import FourthImg from '../src/assets/fourthimg.png'
import ColorEdit from '../src/assets/coloredit.png'
import { useEffect } from "react"
import Header1 from "./components/Header1"

function App() {
  const {signInOrUp,setSignInOrUp}= useSignInOrUpContext()
  const {setUser} = useUserContext()
  const user ={
      avatar: FourthImg,
      name: "Siddharth Goyal"
  }
  useEffect(()=>{
    // setUser(user)
  },[])

  
  return (
    <div className="h-100 relative">
        <div className={`${signInOrUp?' backdrop-brightness-50':''}`}>
          <div className=" max-lg:hidden">
          <Header />
          </div>
          <div className=" hidden max-lg:block p-2">
            <Header1 />
          </div>
          <Hero />
          <div className=" w-100 container gap-12 flex">
            <div className=" w-100">
              <AllPosts />
            </div>
            <div className={`w-50 container max-lg:hidden`}  >
              <RightSide />
            </div>
          </div>
          </div>
          {signInOrUp=='signup'&&<div className=" z-10 absolute container top-20 left-96 bg-opacity-40 max-lg:bottom-0 max-lg:left-0">
            <img src={Cancel} className=" hover:cursor-pointer mb-2" onClick={()=>setSignInOrUp("")} />
            <SignUp />
          </div>}
          {signInOrUp=='signin'&&<div className=" absolute container top-20 left-64 bg-opacity-40 max-lg:bottom-0 max-lg:left-0">
            <div className=" flex justify-between">
            <img src={Cancel} className=" hover:cursor-pointer mb-2" onClick={()=>setSignInOrUp("")} />
            </div>
            <SignIn />
          </div>}
          <div className=" hidden max-lg:block fixed right-0 bottom-0 ">
            <img src={ColorEdit} alt="" />
          </div>
    </div>
  )
}

export default App
