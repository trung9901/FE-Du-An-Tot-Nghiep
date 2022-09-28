
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import WebsiteLayout from './layouts/WebsiteLayout'
import HomePage from './pages/website/Home'
import BookingPage from './pages/website/BookingPage'
import Contact from './pages/website/Contact'
import PriceList from './pages/website/PriceList'
import AdminLayout from './layouts/AdminLayout'
import ListBooking from './pages/admin/booking'


function App() {


  return (
   <>
    <div className="App">
         <Routes>
        <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/price-list' element={<PriceList/>}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index  element={<ListBooking/>}/>
          <Route path='booking' element={<ListBooking/>}/>
        </Route>
      </Routes>
    </div>
   </>
  )
}

export default App
