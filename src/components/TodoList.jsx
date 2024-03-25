import { CiCirclePlus } from "react-icons/ci";
function TodoList(){
  return <div className='w-[600px] h-[800px] bg-white rounded-2xl relative'>

    <div className='w-full mt-6 px-6'>
     <ul className='text-1xl md:text-2xl flex flex-col gap-6 font-bold l text-black/60'>
      <li>Today</li>
      <li>Tomorrow</li>
      <li>Upcoming</li>
      <li>Someday</li>
     </ul>
    </div>

    <div className='w-full  h-[80px] absolute bottom-0 left-0 shadow shadow-lg flex items-center rounded-lg'>
      <div className='h-[40px] w-full flex items-center border border-black/40 shadow mx-4 shadow-lg'>
    <button className='flex justify-center items-center '><CiCirclePlus size={30}/></button>
    <input className='h-full w-full focus:outline-none border focus:border-blue-600 text-1xl md:2xl font-sem-bold  ' placeholder='add new task '/>
      </div>
    </div>
  
  </div>
}
export default TodoList