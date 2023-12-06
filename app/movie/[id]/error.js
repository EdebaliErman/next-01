'use client'
import React from 'react'
import { FaSadTear } from 'react-icons/fa'

function Error() {
    return <div className='flex h-full p-36  justify-between items-center text-4xl gap-4'>
        <h1 className='font-mono text-4xl italic flex gap-3'>
           Error
            <FaSadTear />
        </h1>
        <Link href="/" className='italic font-mono 
 border-b-2 border-white hover:text-gray-200 
   ' >
            Go Home     <FaHome className='w-32 h-32 hover:drop-shadow-2xl hover:shadow-white' />
        </Link>
    </div>
}

export default Error
