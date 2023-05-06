import React from 'react'
import Home from './home';
//import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Shop from './Shop';
import Pages from './Pages';
import All from './All';
import Myapp from './MUI/AutoComplete/Myapp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/*         <Route exact path='/About' element={<About />} /> */}
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/Pages' element={<Pages />} />
        <Route exact path='/Blog' element={<Blog />} />
        <Route exact path='/Shop' element={<Shop />} />
        <Route exact path='/Myapp' element={<Myapp />} />
        {/* <Route exact path='/All' element={<All />} /> */}
      </Routes>

    </BrowserRouter>


  )
}
