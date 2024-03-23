import { CiFacebook ,CiLinkedin ,CiYoutube} from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
function Footer(){
  return <div className="max-w-[1640px] mx-auto py-12 p-4 ">
    <div className='flex flex-col md:flex-row items-center w-full h-fit gap-6 mx-6 justify-center '>
     <div className="mx-6 flex flex-col gap-2 justify-center items-center  ">
     <h2 className="text-black text-1xl md:text-2xl font-bold ">Any.</h2>
       <ul className="text-1xl text-black/50 duration-300 md:text-2xl ">
       <li className="hover:text-black duration-300">about any.do</li>
       <li className="hover:text-black duration-300">wer are hiring </li>
       <li className="hover:text-black duration-300">contact us</li>
       </ul>
     </div> 
     <div className="mx-6 flex flex-col gap-2 justify-center items-center  ">
     <h2 className="text-black text-1xl md:text-2xl font-bold ">Recourses</h2>
       <ul className="text-1xl text-black/50 duration-300 md:text-2xl">
       <li className="hover:text-black duration-300">Support Center</li>
       <li className="hover:text-black duration-300"> Titorial </li>
       <li className="hover:text-black duration-300">Blog</li>
       </ul>
     </div> 
     <div className="mx-6 flex flex-col gap-2 justify-center items-center  ">
     <h2 className="text-black text-1xl md:text-2xl font-bold ">Use Cases</h2>
       <ul className="text-1xl text-black/50 duration-300 md:text-2xl ">
       <li className="hover:text-black duration-300">Project Managment</li>
       <li className="hover:text-black duration-300">Marketing </li>
       <li className="hover:text-black duration-300">Remote Work</li>
       </ul>
     </div> 
     <div className="mx-6 flex flex-col gap-2 justify-center items-center  ">
     <h2 className="text-black text-1xl md:text-2xl font-bold ">Tamplates</h2>
       <ul className="text-1xl text-black/50 duration-300 md:text-2xl ">
       <li className="hover:text-black duration-300">Sprint Planning</li>
       <li className="hover:text-black duration-300">wer are hiring </li>
       <li className="hover:text-black duration-300">contact us</li>
       </ul>
     </div> 
    </div>
    <div className='flex gap-6 w-50 justify-center items-center mt-6 text-1xl  lg:text-2xl ' >
    <i className='hover:text-blue-700 hover:bg-white duration-500 hover:cursor-pointer'><CiFacebook /></i>
    <i className='hover:text-gray-700 hover:bg-white duration-500 hover:cursor-pointer'><BsTwitterX /></i>
    <i className='hover:text-red-700 hover:bg-white duration-500 hover:cursor-pointer'><CiYoutube /></i>
    <i className='hover:text-blue-700 hover:bg-white duration-500 hover:cursor-pointer'><CiLinkedin /></i>
    </div>
    <div className='flex justify-center items-center wrap mt-6 gap-2 '><p>&copy; all rights reserved  </p><p>Made With <CiHeart className='inline text-blue-700' size={25} />By <span className='text-blue-700'>Ln2</span></p></div>
  </div>
}
export default Footer