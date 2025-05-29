import { useState } from 'react'
import './App.css'
import fotoPerfil from "../public/avataria.png"
import huella from "../public/huella.png"

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="bg-gray-300 min-h-screen max-w-screen grid place-items-center  text-center p-10 rounded-xl shadow-xl ">



      <div  id='father'className="bg-gray-100 grid grid-cols-[227px_1fr] grid-rows-[40px_14px_1fr_1fr] w-[380px] h-[240px] border border-black rounded-md overflow-hidden"> 


        <div id='header' className="col-span-2  grid place-items-center px-4">
          <div id='membrete-tricolor' className='grid grid-rows-4 border border-black  h-full w-full rounded-xl overflow-hidden '>
            <div className='bg-yellow-200'></div>
            <div className=' bg-blue-700 text-[06px]  text-white tracking-[6px] font-extrabold text-center'>REPUBLICA BOLIVARIANA DE VENEZUELA</div>
            <div className=' bg-red-600'></div>
            <div className=' tracking-[9px] text-[6.5px] font-black text-center'>CEDULA DE IDENTIDAD</div>
          </div>

        </div>

        
        <div className="  text-[10px] grid justify-end font-bold"> V 23.755.555</div>
         <div className=" text-[10px] grid justify-end font-bold mr-1"> MM333</div>


        <div className="  grid grid-rows-2 grid-cols-[50px_1fr] text-[10px] font-bold">
          <div className='text-[05px] text-left p-1 ml-3'>APELLIDOS <br></br> <br></br> NOMBRES</div> 
          <div className='text-[08px] p-[2px] text-left text-extrabold'>CABALLERO PABON <br></br> JOSE DANIEL</div>

          <div className='grid col-span-2 text-[05px] text-left ml-1 mb-1 mt-7 '>FIRMA TITULAR</div>
          

          
          <div className="">
             </div>

          <div className=""></div>
        </div>

        
        
        <div className=" row-span-2 grid grid-rows-[25px_1fr] ">
          <div className="flex flex-col h-full  text-right text-[08px] mr-2 ">Hugo Cabezas <br></br>
          Director
            
          </div>
          <div className="grid place-items-center h-full">
            <img src={fotoPerfil} className="object-cover object-center h-full w-full" alt="foto-id" />
          </div>
        </div>




        <div className=" grid grid-cols-3 ">
          <img src={huella} className='  h-full'/>

          <div className='grid col-span-2 font-bold mb-2'>
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
