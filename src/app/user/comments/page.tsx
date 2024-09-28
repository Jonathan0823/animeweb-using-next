import React from 'react'
import prisma from '@/app/libs/prisma'
import { authUserSesion } from '@/app/libs/auth-libs'

const Comments = async () => {
    const user = await authUserSesion()
    const comments = await prisma.comment.findMany({
        where: {
            user_email: user?.email || ""
        }
    })

interface Comment{
    id: number
    user_name: string
    comment: string
    mal_id: number
    title: string
}

  return (
    <>
    <h3 className="text-center font-bold text-3xl my-6">My Comments</h3>
    <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mx-4'>
        {comments.map((comment: Comment, index:number) => (
            <div key={index} className="text-black bg-blue-500 px-3 py-2 rounded-2xl mx-4l">
            <p className="font-bold text-white">{comment.title}</p>
            <hr />
            <p className="my-3">{comment.comment}</p>
          </div>
        ))}
    </div>    
    </>
  )
}

export default Comments