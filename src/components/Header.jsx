import React from 'react'
import { useSignInOrUpContext } from './SignInOrUpContext'
import whole from '../assets/whole.png'
import Search from '../assets/search.png'
import { useUserContext } from './UserContext'
import Avatar from './Avatar'

const Header = () => {
    const { signInOrUp, setSignInOrUp } = useSignInOrUpContext()
    const { user } = useUserContext()
    return (
        <nav className="navbar navbar-expand-lg text-dark navbar-dark py-3 ">
            <div className="container ">
                <a href="#" className="navbar-brand text-dark">
                    <img src={whole} alt="" />
                </a>
                {!signInOrUp && <form className="d-flex w-50 ">
                    <input className={`form-control me-2 w-100 rounded-pill ${signInOrUp ? ' bg-slate-500 ' : ''}`} type="search" placeholder={`Search for your favoriate groups in ATG`} aria-label="Search" />
                </form>}
                {!user && <h6 ><span className=' text-black no-underline font-light'> Create Account </span> <span className=' text-blue-600 hover:cursor-pointer' onClick={() => setSignInOrUp('signup')}>It's free</span></h6>
                }
                {
                    user && <Avatar user={user} downarrow={true} />
                }
            </div>
        </nav>
    )
}

export default Header