import React from 'react'
import { useSignInOrUpContext } from './SignInOrUpContext'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'
import SignUpImg from '../assets/signup.png'

const SignUp = () => {
    const { setSignInOrUp } = useSignInOrUpContext()
    return (
        <div className=' bg-white bg-opacity-40 text-black rounded-md w-3/5 max-lg:w-full row'>
            <div className=' bg-green-100 max-lg:p-0 p-2 mb-5 rounded-md flex justify-center items-center '>
                <div>
                    <p className=' text-green-700 font-semibold'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤟🏻</p>
                </div>
            </div>
            <div className=' flex'>
                <div className=' mx-5 flex flex-col gap-2 w-100'>
                    <h4>Sign Up</h4>
                    <div className=' flex flex-col border border-black rounded-md p-1 bg-gray-100'>
                        <div className=' flex w-full'>
                            <input type="text" name="" id="" placeholder='FirstName' className=' outline-none border-gray-400 border p-2 bg-gray-100' />
                            <input type="text" name="" id="" placeholder='LastName' className=' outline-none w-full border-gray-400 border p-2 bg-gray-100' />
                        </div>
                        <input type="email" name="" id="" placeholder='Email' className=' outline-none border-gray-400 border p-2 bg-gray-100' />
                        <input type="password" name="" id="" placeholder='Password' className=' outline-none border-gray-400 border p-2 bg-gray-100' />
                        <input type="password" name="" id="" placeholder='Confirm Password' className=' outline-none border-gray-400 border p-2 bg-gray-100' />
                    </div>
                    <div className=' flex flex-col gap-4'>
                        <div className=' max-lg:flex max-lg:justify-between'>
                            <button className=' btn btn-primary rounded-pill xl:w-full'>Create Account</button>
                            <p className=' underline hidden max-lg:block hover:cursor-pointer' onClick={() => setSignInOrUp('signin')}>or, Sign In</p>
                        </div>
                        <div className='flex flex-col mb-5'>
                            <button className='w-full border border-black py-2 rounded-sm flex justify-center items-center gap-3'><img src={Facebook} alt="" /> Sign Up with Facebook</button>
                            <button className='w-full border border-black py-2 rounded-sm flex justify-center items-center gap-3'> <img src={Google} alt="" /> Sign Up With Google</button>
                        </div>
                    </div>
                </div>
                <div className=' max-lg:hidden'>
                    <p>Already have an account? <a href="#" className=' text-blue-600' onClick={() => setSignInOrUp('signin')}>Sign In</a></p>
                    <img src={SignUpImg} alt="" />
                    <p className=' font-light text-sm'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp