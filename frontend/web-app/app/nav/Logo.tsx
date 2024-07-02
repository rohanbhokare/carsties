'use client'

import { useParamsStore } from '@/hooks/useParamsStore'
import React from 'react'
import {AiOutlineCar} from 'react-icons/ai'

export default function Logo() {

    const reset = useParamsStore(state => state.reset)

  return ( 
    <div>
    <div onClick={reset} className='flex cursor-pointer items-center gap-2 text-3xl font-semibold text-red-500'>
        <AiOutlineCar size={34} />
        Carties Auctions
    </div>
</div>
  )
}
