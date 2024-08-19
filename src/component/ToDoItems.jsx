import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

const ToDoItems = ({text , id, isComplete, deletTask , toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            {isComplete ? < FaCircleCheck className='text-green-600 w-5 h-5'/>:<FaRegCircle className='text-green-600 w-5 h-5'/>}
            <p className={`text-slate-700 ml-4 text-[17px] decoration-green-600 ${isComplete ? "line-through" : ""}`}>
                {text}
            </p>

            
        </div>
        <MdOutlineDeleteForever onClick={()=>{deletTask(id)}} className='text-green-600 w-5 h-5 cursor-pointer'/>
    </div>
  )
}
 
export default ToDoItems
