import Sidebar from '../components/Sidebar'
import TodoList from '../components/TodoList'
import SortLists from '../components/SortLists'
import Searchbar from '../components/Searchbar'
function Home(){
  return <div className=" flex z-10 max-w-[1640px] mx-auto h-screen bg-custom-background bg-cover bg-center w-50">
  <Sidebar/>
    <div className='flex flex-col gap-6 mx-6 py-6'>
  <SortLists/>
  <TodoList/> 
    </div>
    <Searchbar/>
  </div>
}
export default Home