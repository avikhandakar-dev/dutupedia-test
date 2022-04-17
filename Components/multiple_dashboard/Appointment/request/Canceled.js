import React from 'react'
import Image from 'next/image'
import AppoinmentHeader from '../appoinment/AppoinmentHeader'
function Canceled() {
  return (
    <div className="container w-[90%] mx-auto relative ">
    <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
     <AppoinmentHeader></AppoinmentHeader>

     <div className="grid justify-center">
     <div className="flex pt-4">
          <p className="pr-5 text-[#DA1E37] w-[100px] text-center cursor-pointer">Sent</p>
          <div className="-ml-[20px] mt-4 bg-slate-300 w-[1px] h-[22px] mr-2">
        </div>
          <p className="w-[100px] text-center pr-10 cursor-pointer">received</p>
        </div>

        <div className="ml-[11px] -mt-[6px] bg-[#DA1E37]  w-[90px] h-[1px]">
        </div>
        <div className="ml-[100px] -mt-[6px] bg-slate-300  w-[90px] h-[1px]">
        </div>
     </div>
       <div className=" md:min-h-screen min-h-auto mt-12 w-[96%] mx-auto pb-5">
        <div className="flex flex-col  rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md h-auto pb-5">
        <div className="flex mt-6 mr-7 justify-end cursor-pointer">
        <Image src="/cross.svg" width={60} height={60} />
        </div>
         
         
          <h3 className=" capitalize text-[#707070] font-normal flex mt-3 ml-8 text-[20px]">
          Date: 13Th September,2021
          </h3>
          <h3 className=" capitalize text-[#707070] font-normal flex mt-1 ml-8 text-[20px]">
          Time: 12:30Pm
          </h3>
          <h1 className=" capitalize text-[#707070] font-normal flex mt-1 ml-8 text-[27px]">
          Description,
          </h1>
          <h3 className=" capitalize text-[#707070] font-normal flex mt-1 ml-5 text-[16px] px-3 mr-6 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam velit impedit minima in? Aut, et impedit fuga exercitationem ipsa itaque accusamus? Ullam labore nisi hic illum aliquam architecto inventore ea quo. Impedit quia incidunt numquam tenetur necessitatibus illum quibusdam vitae. Sed cum doloribus voluptas odit impedit excepturi necessitatibus dolorum, incidunt nihil harum tenetur aspernatur repudiandae quo dolore magni eaque corrupti rerum? Quaerat quas cumque tempora hic impedit illo doloribus architecto ratione possimus quasi adipisci, cum ipsum odio veritatis eum id deleniti eligendi autem eos nemo! Ipsa autem deserunt velit id facilis possimus incidunt magnam qui, quaerat molestiae iure nesciunt sapiente.
          lorem100
          </h3>
          <div className='flex justify-center mt-10'>
          <div className='w-[120px] lg:w-[170px] h-[45px] text-center text-[#DA1E37] cursor-pointer outline-none border-none md:text-[25px] text-[18px] px-1'>
          Canceled
      </div>
          </div>
        
        </div>
      </div>
  </div>
  </div>
  )
}

export default Canceled