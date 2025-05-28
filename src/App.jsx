import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="bg-gray-300 min-h-screen max-w-screen grid place-items-center  text-center p-10 rounded-xl shadow-xl">

      <div  id='father'className="grid grid-cols-2 grid-rows-[40px_14px_1fr_1fr] bg-gray-100 w-[380px] h-[240px] border-2 border-black rounded-md overflow-hidden "> 


        <div id='header' className="col-span-2 border border-black grid place-items-center px-4">
          <div id='membrete-tricolor' className='grid grid-rows-4 border border-black h-full w-full rounded-xl overflow-hidden '>
            <div className='bg-yellow-200'></div>
            <div className=' bg-blue-700 text-[06px]  text-white tracking-[6px] font-extrabold text-center'>REPUBLICA BOLIVARIANA DE VENEZUELA</div>
            <div className=' bg-red-600'></div>
            <div className=' tracking-[9px] text-[6.5px] font-black text-center'>CEDULA DE IDENTIDAD</div>
          </div>

        </div>
        <div className=" col-span-2 text-[10px] grid justify-center font-bold"> V 23.755.555</div>


        <div className=" border border-black grid grid-rows-2 text-[10px] font-bold">

          
          <div className="border border-black">
             </div>

          <div className="border border-black"> </div>
        </div>
        
        <div className="border border-black  grid grid-rows-2">

          

         

          
        </div>
        <div className="border border-black">

        </div>
        <div className="border-black ">
          
        </div>
        <div className="border border-black">

        </div>
        <div className="border border-black">
          
        </div>
      


      </div>
       
   
    </div>
  )
}

export default App
