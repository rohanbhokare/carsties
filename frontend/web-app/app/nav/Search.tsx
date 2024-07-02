'use client'

import { useParamsStore } from '@/hooks/useParamsStore'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  const setParams = useParamsStore(state => state.setParams);
  const searchValue = useParamsStore(state => state.searchValue)
  const setSearch = useParamsStore(state => state.setSearchValue)

  function onChange(event: any) {
    setSearch(event.target.value);
  }

  function search() {
    setParams({searchTerm: searchValue});;
  }

  return (
    <div className='flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm'>
        <input type="text"
                placeholder='Search for cars by make, model or color'
                value={searchValue}
                onChange={onChange}
                onKeyDown={(e: any) => {
                  console.log(e)
                  if(e.key === 'Enter') search()
                }}
                className='flex-grow pl-5 bg-transparent focus:outline-none border-transparent focus:border-transparent
                 focus:ring-0 text-sm text-gray-600'
                 />
        <button onClick={search}>
            <FaSearch size={34}  className='bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2'/>
        </button>
    </div>
  )
}
