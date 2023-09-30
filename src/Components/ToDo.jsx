import React from 'react'
import {BsTrash} from 'react-icons/bs'
const ToDo = ({value}) => {
  return (
    <div className='bg-white flex  gap-10 h-[3rem] rounded-2xl p-2 justify-between'>
    <input type="checkbox" />
    <div className='bg-black text-white text-center rounded-lg w-[20rem]'>{value.text}</div>
    <BsTrash size={30}/>
    </div>
  )
}

export default ToDo
