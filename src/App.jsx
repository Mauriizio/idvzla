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

        
        <div className="  text-[10px] grid justify-end font-bold"> V 23.755.555</div>
         <div className=" text-[10px] grid justify-end font-bold mr-1"> MM333</div>


        <div className="  grid grid-rows-2 grid-cols-2 text-[10px] font-bold">
          <div className='text-[05px] text-left p-1 '>APELLIDOS <br></br> <br></br> NOMBRES</div> 
          <div className='text-[08px] p-0 text-left text-extrabold'>CABALLERO PABON <br></br> JOSE DANIEL</div>

          <div className='grid col-span-2 text-[05px] text-left ml-1 mb-1 mt-7 '>FIRMA TITULAR</div>
          

          
          <div className="">
             </div>

          <div className=""></div>
        </div>

        
        
        <div className=" row-span-2 border border-black  grid grid-rows-2">13

                   
        </div>
        <div className=" grid grid-cols-3 border border-black">
          <div>huella</div>
          
          <div className='grid col-span-2 font-bold'>
            <p className='text-[09px]'>14-01-80 SOLTERO</p>
            <p className='text-[05px]'>F. NACIMIENTO EDO. CIVIL</p>
            <p className='text-[09px] mt-3'>12-06-04 06-2014</p>
            <p className='text-[05px]'>F. EXPEDICION F. VENCIMIENTO</p>
            <p className='text-[16px]'>VENEZOLANO</p>

          </div>
          

        </div>
       
        
      


      </div>
       
   
    </div>
  )
}

export default App
