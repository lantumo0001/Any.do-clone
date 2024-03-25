import { TbMobiledata } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
function SortLists(){
  return <div className='w-[300px] h-[40px] rounded-full bg-white flex items-center flex gap-2 px-6 py-2 justify-between'>
  <h2 className='text-yellow-300 font-black text-1xl md:text-2xl '>Priority</h2>
    <div className='border-l border-stone-200/80 h-full'></div>
    <div className='flex items-center '>
      <TbMobiledata size={20}/><p className='text-black/60'> View </p>
    </div>
    <div className='border-l border-stone-200/80 h-full'></div>
    <BsThreeDots size={20} />
  </div>
}
export default SortLists