import React from 'react'
import DownArrow from '../assets/DownArrow.png'

const Avatar = ({ user, downarrow=false}) => {
    return (
        <div className=' flex items-center gap-3'>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={user.avatar} alt="" />
            <div>
                <h6>{user.name}</h6>
                {downarrow && <img src='' />
                }
            </div>
        </div>
    )
}

export default Avatar