import { CiSettings } from "react-icons/ci";
import { IoMdToday } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
function Sidebar(){
  return <div className="max-w-[1640px] h-screen mt-0 border">
    <div className="w-[250px] h-full bg-white z-10">
     <div className="flex mx-4 items-center py-12 gap-6">
      <button className="flex justify-center border border-black/60 items-center bg-white rounded-full w-[40px] h-[40px]"><CiSettings size={25} /></button>
       <div className="flex flex-col">
        <h3 className="text-1xl text-black font-bold">high</h3>
        <p className="text-1xl text-black/60 ">free plan</p>
       </div>
     </div>
      <div className='flex flex-col'>
      <div className="flex mx-4 items-center pt-6 ">
      <button className="text-blue-600/70 border border-blue-600 rounded-full w-[80%] max-w-[150px] h-[35px] font-bold">Go Premium</button>
      </div>
        <div className='flex flex-col gap-4 mt-12 w-full'>
        
      <div className='flex gap-2  items-center px-4 h-[40px] hover:bg-stone-200/80 duration-300 cursor-pointer'>
       <IoMdToday size={20} />
       <span className='text-black/80 text-1xl md:text-2xl lg:text-2xl font-bold/80'>my day </span>
      </div>
      <div className='flex  gap-2  items-center px-4 h-[40px] hover:bg-stone-200/80 duration-300 cursor-pointer'>
       <IoMdToday size={20} />
       <span className='text-black/80 text-1xl md:text-2xl lg:text-2xl font-bold/80'>Next 7 days</span>
        <div className='w-[30px] h-[30px] rounded-full bg-stone-200 p-2 flex items-center justify-center hover:bg-white  '><span>4</span></div>
      </div>
      <div className='flex  gap-2  items-center px-4 h-[40px] hover:bg-stone-200/80 duration-300 cursor-pointer'>
       <FaTasks size={20} />
       <span className='text-black/80 text-1xl md:text-2xl lg:text-2xl font-bold/80'>All my tasks</span>
        <div className='w-[30px] h-[30px] rounded-full bg-stone-200 p-2 flex items-center justify-center hover:bg-white  '><span>6</span></div>
      </div>
      <div className='flex  gap-2  items-center px-4 h-[40px] hover:bg-stone-200/80 duration-300 cursor-pointer'>
        <CiCalendar size={25} />
       <span className='text-black/80 text-1xl md:text-2xl lg:text-2xl font-bold/80'>My calendar</span>
        <div className='w-[40px] h-[30px] rounded-lg bg-blue-600 p-2 flex items-center justify-center font-sem-bold '><span className='text-white'>beta</span></div>
      </div>
        
        </div>
      
      
      </div>
    </div>
  
  </div>
}
export default Sidebar