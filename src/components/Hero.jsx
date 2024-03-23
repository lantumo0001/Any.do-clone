function Hero(){
  return <div relative className="max-w-[1640px] mx-auto h-fit bg-stone-200 p-4 py-12">
      <div className="flex h-[500px] w-[100%] justify-between items-center">
          <div className="mx-4 ">
            <h1 className="text-3xl lg:text-[50px] md:text-[35px] font-black leading-10 py-12" >The all-in-one to-do list for web.</h1>
            <p className='text-1xl md:3xl lg:4xl font-sem-bold mt-6 '>Don’t get left behind. Get rid of overpriced project management tools and get your work done with an all-in-one web app that makes other apps look dull.</p>
          <button className="my-6 text-white text-1xl font-bold border border-blue-600 bg-blue-500 hover:bg-blue-700 w-[200px] h-[45px] md:w-[220px]  lg:w-[250px] text-center rounded-full hover:bg-yellow duration-300 ">Get Started! - its free</button>
          </div>
          <div>
          <img src="https://www.any.do/v4/images/mac/main-image-to-do@2x.png" alt="to-do-list-image"/>
          </div>
    </div>
    <div className="hidden w-[200px] rounded bg-white h-[300px] my-12 z-20 fixed top-[200px] right-[20px] py-6 p-3 flex flex-col gap-6 ">
       <h2 className='text-black  text-1xl md:text-2xl lg:text-3xl font-bold  '>What are you looking to manage?</h2>
        <button className="border border-blue-600 h-[80px] w-full rounded-lg drop-shadow-2xl shadow-lg shadow-gray-300 ">My Task</button>
        <button className="border border-blue-600 h-[80px] w-full rounded-lg drop-shadow-2xl  shadow-lg shadow-gray-300">My Team's Work</button>
    </div>
  </div>
}
export default Hero