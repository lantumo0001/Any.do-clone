import { RiArrowDropDownLine } from "react-icons/ri";
import { Link} from 'react-router-dom'
function Navbar(){
 return  <div className="max-w-[1640px] mx-auto z-10 sticky top-0">
<div className="flex h-[110px] justify-between w-full h-[100px] bg-stone-50 items-center mx-auto px-2">
 <div className=" flex h-full gap-6 ">
   <div className="flex items-center">
    <strong className="font-bold text-black text-2xl md:text-4xl lg:text-5xl">Any<span className="font-bold text-blue-600 text-2xl md:text-3xl lg:text-4xl">.</span>do</strong>
   </div>
   {/* navigation  */}
    <nav className="flex max-w-[500px] h-full hidden lg:flex ">
      <div className="nav-link">
        <ul className="flex w-full h-full gap-6 items-center  ">
           <li>
              <button className="border-transparent flex gap-1 items-center wrap text-black/60 font-sem-bold ">
               Meet Any.do<i><RiArrowDropDownLine /></i>
              </button>
           </li>
           <li>
              <button className="border-transparent flex gap-1 items-center wrap text-black/60 font-sem-bold text-1xl md:2xl lg:3xl ">
               Solutions<i><RiArrowDropDownLine /></i>
              </button>
           </li>
           <li>
              <button className="border-transparent flex gap-1 items-center wrap text-black/60 font-sem-bold text-1xl md:2xl lg:3xl ">
               Resources<i><RiArrowDropDownLine /></i>
              </button>
           </li>
           <li>
              <button className="border-transparent flex gap-1 items-center wrap text-black/60 font-sem-bold text-1xl md:2xl lg:3xl">
               Pricing
              </button>
           </li>

         </ul>
      </div>
      {/*  drop down menu */}
       <div className="hidden">
         <ul>
            <li>to do list and tasks</li>
            <li>to do list and tasks</li>
            <li>to do list and tasks</li>
            <li>to do list and tasks</li>
            <li>to do list and tasks</li>
            <li>to do list and tasks</li>
            <li>to do list and tasks</li>
            <li>to do list and tasks</li>
         </ul>
       </div>
      <div>
         <div className="hidden">
           <p><strong>plans </strong></p>
           <ul>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
           </ul>
         </div>
         <div className="hidden">
           <p><strong>by use case </strong></p>
           <ul>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
           </ul>
         </div>
         <div className="hidden">
           <p><strong>by tamplate </strong></p>
           <ul>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
              <li>to do list and tasks</li>
           </ul>
         </div>
      </div>
      <div className="hidden">
        <ul>
           <li>to do list and tasks</li>
           <li>to do list and tasks</li>
           <li>to do list and tasks</li>
           <li>to do list and tasks</li>
           <li>to do list and tasks</li>
           <li>to do list and tasks</li>
           <li>to do list and tasks</li>
           <li>to do list and tasks</li>
        </ul>
      </div>
    </nav>
 </div>
  
 <div className="flex items-center gap-6 mr-[20px]">
    <div className="hover:cursor-pointer"><h3 className="text-blue-600 font-sem-bold text-1xl md:2xl  lg:3xl tracking-wide ">Contact Sales</h3></div>
    <Link to='/signup' >
    <button className="border border-blue-600 p-4 rounded-full h-[45px] flex items-center text-blue-500 w-[95px] justify-center hover:bg-blue-600 hover:text-white duration-300 text-[20px]">Login</button>
     </Link>
 </div>
</div>
 </div>
}
export default Navbar