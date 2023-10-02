import React from 'react'
import {BsTrash} from 'react-icons/bs'
const ToDo = ({value,toggleComponent,deleteTodo}) => {
  return (
    <div className="bg-white flex  gap-10 h-[3rem] rounded-2xl p-2 justify-between">
      <input
        type="checkbox"
        checked={`${value.completed ? "check" : ""}`}
        onChange={() => toggleComponent(value)}
      />
      <div
        className={`bg-black text-white text-center rounded-lg w-[20rem] ${
          value.completed ? "line-through" : "no-underline"
        } hover:cursor-pointer`}
        onClick={() => toggleComponent(value)}
      >
        {value.text}
      </div>
      <button onClick={()=>deleteTodo(value.id)}>
        <BsTrash size={30} />
      </button>
    </div>
  );
}

export default ToDo