
import { useState } from 'react'
import './App.css'

function App() {
    const [color, setColor] = useState("olive")
   

  return (
     <>
      <div className='w-full h-screen duration-200 bg-black' style={{
        background: color
      }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
           <div className='flex  flex-wrap justify-center 
           gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
             style={{backgroundColor:"blue"}}
             onClick={() => setColor("blue")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'
            >blue</button>
            <button 
              style={{backgroundColor:"red"}}
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'
            >Red</button>
           
           </div>
         </div>
      </div>

     </>
  )
}

export default App
