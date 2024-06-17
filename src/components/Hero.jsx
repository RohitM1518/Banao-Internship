import React from 'react'
import { NavLink } from 'react-router-dom'
import {data} from './constants'
import Rectangle from '../assets/Rectangle 2.png'
import DownArrow from '../assets/DownArrow.png'
import Connect from '../assets/connect.png'
import Exit from '../assets/exit.png'
import HeroImg from '../assets/hero.png'
import { useUserContext } from './UserContext'
import { useSignInOrUpContext } from './SignInOrUpContext'
import LeftArrow from '../assets/leftarrow.svg'

const Hero = () => {
    const {user} = useUserContext()
    const {signInOrUp,setSignInOrUp}= useSignInOrUpContext()
    return (
        <div>
        <div
            className="h-96 relative"
            style={{ backgroundImage: `url(${HeroImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
     }}
        >
            <div className="absolute inset-0 bg-black opacity-50 max-lg:opacity-20"></div>
            <div className=' hidden max-lg:flex max-lg:justify-between max-lg:px-5 '>
                <img src={LeftArrow} alt="" className=' z-10'/>
                <button className=' text-white border-white border mt-3 items-center p-2 rounded-lg hover:cursor-pointer z-10' onClick={()=>{setSignInOrUp('signup')}}>{user ? "Leave Group":"Join Group"}</button>
            </div>
            <div className=' absolute bottom-16 left-40 max-lg:bottom-4 max-sm:left-4 bg-opacity-40'>
                <h1 className='text-white'>Computer Science</h1>
                <h6 className='text-white font-light'>142,765 Computer Engineers follow this</h6>
                </div>
        </div>
        <div className='container flex justify-between mt-4 max-lg:hidden'>
        <div className=" flex flex-row">
            <ul className="flex gap-4">
                <li className="nav-item">
                    <NavLink to="/"  className={({ isActive }) => `nav-link ${isActive ? '' : 'opacity-40'} font-bold`}>All Posts ({data.length})</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/article" className={({ isActive }) => `nav-link ${isActive ? '' : 'opacity-40'}`}>Article</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/education" className={({ isActive }) => `nav-link ${isActive ? '' : 'opacity-40'}`}>Event</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/education" className={({ isActive }) => `nav-link ${isActive ? '' : 'opacity-40'}`}> Education</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/job" className={({ isActive }) => `nav-link ${isActive ? '' : 'opacity-40'}`}>Job</NavLink>
                </li>
            </ul>
        </div>
        {!signInOrUp && <div className=' flex  gap-4'>
            <button className=" px-2 bg-slate-100 rounded-md font-semibold flex justify-center items-center gap-3">Write a post <img src={DownArrow}/></button>
            <button className={` bg-blue-500 rounded-lg flex items-center justify-center  gap-2 px-2 ${user ? ' bg-white text-black border':'text-white'}`}><img src={user?Exit:Connect} className=''/> {user ?"Leave Chat":"Join Group"}</button>
        </div>}
    </div>
    <div className='justify-between hidden max-lg:flex max-lg:mt-4 max-lg:px-6'>
        <p className=' font-extrabold'>Posts (36)</p>
        <button className=' border px-2 flex items-center font-semibold gap-2 bg-gray-100 rounded-sm'>Filter: ALL <img src={DownArrow} alt="" /></button>
    </div>
    <div className=' container h-[1px] bg-black mt-2'></div>
    </div> 
    )
}

export default Hero