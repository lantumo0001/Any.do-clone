import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
function Cards(){
return <div className="max-w-[1640px] mx-auto bg-stone-200 p-4 py-6">
 
  <div className="flex flex-col md:flex-row items-center w-full h-fit gap-6  ">
    {/* cards */}
    <button className="rounded-full w-[60px] h-[60px] bg-stone-50 z-10 shadow-sm flex justify-center items-center "><FaArrowLeft size={25} /></button>
    <div className="w-[400px] h-[600px]  rounded-2xl bg-stone-50 flex items-center shadow-lg ">
      <div className="mx-6 flex flex-col gap-6 my-2 py-6">
      <p className="text-1xl md:text-2xl lg:text-4xl font-sem-bold text-center  ">⭐⭐⭐⭐</p>
      <p className=" lg:text-2xl font-bold text-1xl leading-6">Any.do’s web app makes project management fun with a simple design, powerful features and complete flexibility. Manage tasks & events, attach files, delegate and share items in seconds. Customize the design to suit your own style and add smart reminders so nothing will slip away.</p>
      </div>
    </div>
    <div className="w-[400px] h-[600px]  rounded-2xl bg-stone-50 flex items-center shadow-lg ">
      <div className="mx-6 flex flex-col gap-6 my-2">
      <p className="text-1xl md:text-2xl lg:text-4xl font-sem-bold text-center ">⭐⭐⭐⭐</p>
      <p className=" lg:text-2xl font-bold text-1xl leading-6">Any.do’s web app makes project management fun with a simple design, powerful features and complete flexibility. Manage tasks & events, attach files, delegate and share items in seconds. Customize the design to suit your own style and add smart reminders so nothing will slip away.</p>
      </div>
    </div>
    <div className="w-[400px] h-[600px]  rounded-2xl bg-stone-50 flex items-center shadow-lg py-6">
      <div className="mx-6 flex flex-col gap-6 my-2">
      <p className="text-1xl md:text-2xl lg:text-4xl font-sem-bold text-center ">⭐⭐⭐⭐</p>
      <p className=" lg:text-2xl font-bold text-1xl leading-6">Any.do’s web app makes project management fun with a simple design, powerful features and complete flexibility. Manage tasks & events, attach files, delegate and share items in seconds. Customize the design to suit your own style and add smart reminders so nothing will slip away.</p>
      </div>
    </div>
   <button className="rounded-full hidden md:block h-[60px] w-[60px] bg-stone-50 shadow-sm text-center flex justify-center items-center p-4 z-10 "><FaArrowRight size={25}/></button>
  </div>



</div>
}
export default Cards