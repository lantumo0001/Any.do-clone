import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import {Link} from 'react-router-dom'
function Signup() {
  return (
    <div className='max-w-[1640px] p-4 mx-auto bg-stone-200'>
      <div className='flex h-screen w-[85%] mx-auto items-center justify-between bg-white p-6 rounded-lg shadow-lg'>

        {/* Container with background image */}
        <div className='hidden md:block relative h-full w-full background-image'>
          {/* Content overlay */}
          <div className='hidden md:flex absolute inset-0 flex flex-col justify-center items-center bg-opacity-75  z-10 text-white bg-white/50'>
            <h1 className='lg:text-2xl text-1xl text-black/60'>Any.do</h1>
            <p className='text-lg font-black text-1xl md:text-2xl lg:text-4xl text-black '>Organize it all</p>
          </div>
        </div>

        {/* Signup form */}
        <div className='flex flex-col bg-stone-50 w-[400px] h-full justify-center items-center gap-6 px-4 bg-white rounded-lg py-6'>
          <Link to='/home' >
          
          <button className='border border-blue-600 h-[60px] w-[300px] rounded-full bg-blue-500 hover:bg-blue-700 text-white font-sem-bold px-2 flex justify-center items-center gap-6 duration-500'>
            <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
              <FcGoogle size={25} />
            </div>
            <div className='flex flex-col'>
            <span className='text-white font-black text-1xl'>Continue with Google</span>
              <p className='text-sm text-white/80'>secured login</p>
            </div>
           </button>
          </Link>
          <input className='border border-blue-600 h-[60px] w-[300px] rounded-full px-2 focus:outline-none hover:border-blue-700 hoveer:shadow-lg text-gray-500/50 font-sem-bold' placeholder='Enter Your Work Email' />
          <span className='text-black/60'>or</span>
          <div className='flex justify-between gap-6 items-center '>
          <button className='h-[50px] w-[100px] rounded rounded-full border border-gray-600/50 hover:border-black flex items-center justify-center 
 duration-500'><FaApple size={25}/></button>
          <button className='h-[50px] w-[100px] rounded rounded-full border border-gray-600/50 hover:border-black flex items-center justify-center duration-500'><FaFacebook size={25}/></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;
