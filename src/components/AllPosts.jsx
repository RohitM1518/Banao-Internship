import React from 'react'
import {data} from './constants.js'
import Post from './Post.jsx'
import { useSignInOrUpContext } from './SignInOrUpContext.jsx'

const AllPosts = () => {
  const {signInOrUp}= useSignInOrUpContext()
  return (
    <div className=' container'>
      { !signInOrUp &&
        data.map((post)=>(
          <Post image={post?.image} genre={post.genre} title={post.title} content={post.content} views={post.views} user={post.user} isButton={post?.button} buttonStyle={post?.buttonStyle} date={post?.date} dateImg={post?.dateImg} location={post?.location} locationImg={post?.locationImg}/>
        )
        )
      }
    </div>
  )
}

export default AllPosts