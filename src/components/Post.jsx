import React, { useState } from 'react'
import Avatar from './Avatar'
import Eye from '../assets/eye.png'
import Share from '../assets/share.png'
import ThreeDots from '../assets/threedots.png'
import { Button } from 'bootstrap'

const Post = ({ image, genre, title, content, user, views, isButton = '', buttonStyle = '', date = '', dateImg, location, locationImg }) => {
    const [showList, setShowList] = useState(false)
    return (
        <div className=' mt-5'>
            <div className="card">
                {image && <img src={image} className="card-img-top" alt="..." />}
                <div className="card-body">
                    <h5 className="card-title">{genre}</h5>
                    <div className=' flex justify-between items-baseline'>
                        <h3 className="card-title">{title}</h3>
                        {
                            showList && <ul className=' bg-white mr-3 shadow-lg p-2 px-4 rounded-md '>
                                <li>Edit</li>
                                <li>Report</li>
                                <li>Option3</li>
                            </ul>
                        }
                        <img src={ThreeDots} alt="" className=' hover:cursor-pointer' onClick={()=>setShowList(prev => !prev)}/>
                    </div>
                    {content && <p className="card-text">{content}</p>}
                    {date && <div className=' flex items-baseline gap-6'>
                        <div className=' flex items-baseline'>
                            <img src={dateImg} alt="" className='mr-2' /> <p className=' font-semibold '>{date}</p>
                        </div>
                        <div className=' flex items-baseline'>
                            <img src={locationImg} alt="" className='mr-2' /><p className=' font-semibold '> {location}</p>
                        </div>
                    </div>}
                    {isButton && <button className={`${buttonStyle} w-full text-center border py-1 text-sm font-semibold`}>{isButton}</button>}
                </div>
                <div className="container text-muted flex justify-between p-3">
                    <Avatar user={user} />
                    <div>
                        <div className=' flex gap-5 '>
                            <div className=' flex justify-center items-center gap-2'>
                                <img src={Eye} alt="" width={20} height={20} />
                                {views} Views
                            </div>
                            <img src={Share} className=' hover:cursor-pointer'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post