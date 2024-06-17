import React from 'react'
import { users } from './constants'
import Avatar from './Avatar'
import Location from '../assets/location.png'
import Edit from '../assets/edit.png'
import Thumb from '../assets/thumb.png'
import Warning from '../assets/waring.png'
import { useUserContext } from './UserContext'
import { useSignInOrUpContext } from './SignInOrUpContext'

const RightSide = () => {
    const {user} = useUserContext()
    const {signInOrUp} =useSignInOrUpContext()
  return (
    <div className=' container mt-5 ml-5'>
        <div className=' flex gap-3 items-center'>
        <div className=' pb-1 border-b-[1px] border-black flex justify-center items-center'>
        <img src={Location} alt="" width={25} height={25}/><input type="text" className={`outline-none w-56 ${signInOrUp?'hidden':''}`} placeholder='Enter Your Location'/>
        <img src={Edit} className=''/>
        </div>
        </div>
        <div className=' max-w-60'>
            <p className=' mt-5 font-extralight text-sm flex items-baseline'><img src={Warning} alt="" className=' object-contain' />Your location will help us serve better and extend a personalised experience</p>
        </div>
       {user && <div className=''>
            <p className=' mt-16 font-semibold text-2xl font-sans flex gap-4 items-center'><img src={Thumb} alt="" className='flex' width={30} height={30}/>Recommended Groups</p>
            <div className=' flex flex-col gap-4 mt-6'>
                {
                    users.map(user=>(
                        <div className=' flex justify-between'> 
                        <Avatar user={user} />
                        <button className='px-3 rounded-3xl bg-gray-200'>Follow</button>
                        </div>
                    ))
                }
            </div>
            <p className=' text-blue-500 mt-10 float-right'> See More...</p>
        </div>}
    </div>
  )
}

export default RightSide