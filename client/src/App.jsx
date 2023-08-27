import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import { CampaignDetails,CreateCampaign,Home,Profile } from './pages'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <BrowserRouter>
    <div className='flex p-4 bg-[#13131a] min-h-screen'>
      <div className='sm:flex hidden mr-10 relative'>
        <Sidebar/>
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div></BrowserRouter>
  )
}

export default App