import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import { CampaignDetails,CreateCampaign,Home,Profile } from './pages'
const App = () => {
  return (
    <BrowserRouter>
    <div className='flex p-8'>
      <div className='sm:flex hidden mr-10 relative'>
        Sidebar
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        navbar
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div></BrowserRouter>
  )
}

export default App