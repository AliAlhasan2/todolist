import React from 'react'
import ToDo from './component/ToDo'
import { GiStrong } from "react-icons/gi";

const App = () => {
  return (
    <div className="grid py-4 min-h-screen"style={{ background: 'linear-gradient(135deg, #34d399, #059669)' }}>
      <GiStrong className='flex flex-1 items-center w-16 h-16'/>
      <h1 className='text-center text-5xl mt-10 ' style={{ fontFamily: 'New Amsterdam, serif' }}>Make today count</h1>
      <ToDo />
    </div>
  )
}

export default App 
