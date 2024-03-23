import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Footer from './components/Footer'
import SyncBanner from './components/SyncBanner'
export default function App() {
  return (
    <main className='max-w-[1640px] h-screen bg-gray-200 mt-0'>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Cards/>
      <SyncBanner/>
      <Footer/>
    </main>
  )
}
