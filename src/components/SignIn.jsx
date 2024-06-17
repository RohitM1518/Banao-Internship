import React from 'react'
import { useSignInOrUpContext } from './SignInOrUpContext'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'
import SignUpImg from '../assets/signup.png'

const SignIn = () => {
    const {setSignInOrUp}= useSignInOrUpContext()
    return (
        <div className=' bg-white bg-opacity-40 text-black rounded-md w-3/5 max-lg:w-full'>
            <div className=' bg-green-100 p-2 mb-5 rounded-md flex justify-center items-center'>
                <div>
                <p className=' text-green-700 font-semibold'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤟🏻</p>
                </div>
            </div>
            <div className=' flex'>
            <div className=' mx-5 flex flex-col gap-2 w-50'>
                <h4>Sign In</h4>
                <div className=' flex flex-col border border-black rounded-md p-1 bg-gray-100'>
                    <input type="email" name="" id="" placeholder='Email' className=' outline-none border-gray-400 border p-2 bg-gray-100' />
                    <input type="password" name="" id="" placeholder='Password' className=' outline-none border-gray-400 border p-2 bg-gray-100' />
                </div>
                <div className=' flex flex-col gap-4'>
                    <div className=' max-lg:flex max-lg:justify-between'>
                        <button className=' btn btn-primary rounded-pill xl:w-full '>Sign In</button>
                        <p className=' underline hidden max-lg:block hover:cursor-pointer' onClick={()=>setSignInOrUp('signup')}>or, Create Account</p>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <button className='w-full border border-black py-2 rounded-sm flex justify-center items-center gap-3'><img src={Facebook} alt="" /> Sign Up with Facebook</button>
                        <button className='w-full border border-black py-2 rounded-sm flex justify-center items-center gap-3'> <img src={Google} alt="" /> Sign Up With Google</button>
                    </div>
                    <p className=' text-center font-semibold'>Forgot Password</p>
                </div>
            </div>
            <div className=' max-lg:hidden'>
                <p>Don’t have an account yet? <a href="#" className=' text-blue-600' onClick={()=>setSignInOrUp('signup')}> Create new for free!</a></p>
                <img src={SignUpImg} alt="" />
            </div>
            </div>
        </div>
    )
}

export default SignIn