import { CiSearch } from "react-icons/ci";
function Searchbar(){
  return <div className='w-[200px] h-[40px] mt-6 mx-auto border border-black/40 flex gap-2 bg-white items-center rounded-full  px-4 hover:w-[400px] duration-500'>
    <button className='p-2 flex items-center justify-center'>
    <CiSearch size={20} />
    
    </button>
    <input className='w-[150px] h-full text-black focus:outline-none border  text-1xl md:2xl font-sem-bold border-none rounded-full' placeholder='search'/>
  
  
  </div>
}
export default Searchbar