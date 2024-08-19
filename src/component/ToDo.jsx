import React, { useEffect, useRef, useState } from 'react'
import { LuListTodo } from "react-icons/lu";
import { GrAddCircle } from "react-icons/gr";
import ToDoItems from './ToDoItems';




const ToDo = () => {
    const [ToDoList,SetTodoList]=useState(localStorage.getItem("todos")?
        JSON.parse(localStorage.getItem("todos")):[]);
    const inputRef=useRef();
    const add=() =>{
        const inputcurrent=inputRef.current.value.trim();

        if (inputcurrent===""){
            return null;
        }
        
        const newTask={
            id: Date.now(),
            text: inputcurrent,
            isComplete:false,
        }
        SetTodoList((prev)=> [...prev, newTask]);
        inputRef.current.value="";
    }
    const deletTask = (id) => {
             SetTodoList((prevTodos) => {
            return prevTodos.filter((td) => td.id !== id);
        })
        
    }
    const toggle= (id)=>{
        SetTodoList((prevTodos)=>{
            return prevTodos.map((todo) => {
                if(todo.id===id){
                    return {...todo, isComplete:!id.isComplete}
                }
                return todo;
            })
        })

    }
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(ToDoList));
    },[ToDoList])
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        <div className="flex items-center mt-7 gap-2 shadow-lg">
            <LuListTodo className="icon w-8 text-3xl"/>
            <h1 className='text-3xl ' style={{ fontFamily: 'New Amsterdam, serif' }}>To Do List</h1>
        </div>
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'  type="text" placeholder='Add Your Task'  />
            <button onClick={add} className='bg-green-600 border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'><GrAddCircle className='text-white w-9 h-9'/></button>
        </div>
        <div>
            {ToDoList.map((item, index)=>{
                return <ToDoItems key={index} text={item.text} id={item.id}
                isComplete={item.isComplete} deletTask={deletTask} toggle={toggle}/>
            })}
        </div>
    
    </div>
  )
}

export default ToDo
