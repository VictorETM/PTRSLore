import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import NavBar from '../Components/NavBar' 
import {Conatiner } from '../Components/Pagecss/Pagecss'
import Err404 from '../Pages/Err404'
import Home from '../Pages/Home'
import Stories from '../Pages/Stories'

const router = () => {
  return (
    <div>
        <BrowserRouter>


        <NavBar/>
        <Conatiner>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Stories'element={<Stories/>}/>
          <Route path='*' element={<Err404/>}/>
        </Routes>
        </Conatiner>
        
        
        </BrowserRouter>



    </div>
  )
}

export default router